import axios, {AxiosResponse} from 'axios';
import {useEffect} from 'react';
import {useAxiosInstance} from '../hooks/useAxiosInstance';
import {useAppDispatch} from '../srstore/rstore';
import {addProfile} from '../srstore/slices/profiles';
import {Profile} from '../types';

export const useProfileHandler = () => {
  const {axios} = useAxiosInstance();
  const dispatch = useAppDispatch();

  const loadProfile = async (userId: string) => {
    return axios.get<{}, AxiosResponse<Profile>>('/user/' + userId).then(e => {
      if (e.status == 200) {
        dispatch(addProfile(e.data));
      }
      return e;
    });
  };
  const followProfile = () => {};
  return {
    loadProfile,
    followProfile,
  };
};
