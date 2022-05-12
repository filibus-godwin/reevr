import axios from 'axios';
import {useStore} from '../store/store';

export const useRefresh = async () => {
  const {refreshToken} = useStore(state => state.user);
  return axios
    .get('http://192.168.43.9:4000/api/', {
      headers: {authorization: `Bearer ${refreshToken}`},
    })
    .then(e => e.data);
};
