import axios, {AxiosResponse} from 'axios';
import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../srstore/rstore';
import {updateCredentials} from '../srstore/slices/credentials';

const baseURL = true ? '' : 'http://192.168.43.9:4000/api';

const abortController = new AbortController();
const axiosInstance = axios.create({
  baseURL,
  signal: abortController.signal,
});

const getAxiosInstance = () => {
  return {axiosInstance, abort: abortController.abort};
};

const requestAccessToken = async (refreshToken: string) => {
  console.log('refresh Refresh', refreshToken);
  return axiosInstance
    .get<{}, AxiosResponse<string>>('/refresh', {
      headers: {
        Authorization: 'Bearer ' + refreshToken,
      },
    })
    .then(e => {
      console.log(e.data);
      return e.data;
    });
};

export const useAxiosInstance = () => {
  const {refreshToken, accessToken} = useAppSelector(
    state => state.credentials,
  );
  // const {abort, axiosInstance} = {axiosInstance, abort};
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      config => {
        if (config.headers)
          if (!config.headers['Authorization']) {
            config.headers['Authorization'] = 'Bearer ' + accessToken;
          }
        return config;
      },
      error => {
        console.log('error request', error);
      },
    );
    const responseInterceptor = axiosInstance.interceptors.response.use(
      response => response,
      async error => {
        const previousRequest = error.config;
        if (error.response.status == 403 && !previousRequest.isRetry) {
          previousRequest.isRetry = true;
          const newAccessToken = await requestAccessToken(refreshToken);
          if (!newAccessToken) Promise.reject(error);
          dispatch(updateCredentials({accessToken: newAccessToken}));
          previousRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;
          return axiosInstance(previousRequest);
        }
        Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [refreshToken]);

  return {
    axios: axiosInstance,
    abort: abortController.abort,
  };
};
