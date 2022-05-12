import {AxiosResponse} from 'axios';
import {useAxiosInstance} from '../hooks/useAxiosInstance';
import {useAppDispatch} from '../srstore/rstore';
import {
  Credentials,
  addCredentials,
  resetCredentials,
} from '../srstore/slices/credentials';
import {resetProfiles} from '../srstore/slices/profiles';
import {resetPosts} from '../srstore/slices/posts';

export const useAuth = () => {
  const {axios} = useAxiosInstance();
  const dispatch = useAppDispatch();

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return axios
      .post<{email: string; password: string}, AxiosResponse<Credentials>>(
        '/login',
        {email, password},
      )
      .then(e => {
        if (e.status == 201)
          dispatch(
            addCredentials({
              accessToken: e.data.accessToken,
              streamToken: e.data.streamToken,
              refreshToken: e.data.refreshToken,
              id: e.data.id,
            }),
          );
        return e;
      });
  };

  const register = async ({
    email,
    password,
    dateOfBirth,
    username,
  }: {
    email: string;
    password: string;
    dateOfBirth: string;
    username: string;
  }) => {
    return axios
      .post<
        {
          email: string;
          password: string;
          dateOfBirth: string;
          username: string;
        },
        AxiosResponse<Credentials>
      >('/register', {
        email,
        password,
        username,
        dateOfBirth,
      })
      .then(e => {
        console.log(e);
        if (e.status == 201)
          dispatch(
            addCredentials({
              accessToken: e.data.accessToken,
              streamToken: e.data.streamToken,
              refreshToken: e.data.refreshToken,
              id: e.data.id,
            }),
          );
        return e;
      });
  };

  const logout = () => {
    dispatch(resetCredentials());
    dispatch(resetProfiles());
    dispatch(resetPosts());
  };

  return {
    register,
    login,
    logout,
  };
};
