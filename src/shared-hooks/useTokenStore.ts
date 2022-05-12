import {useStore} from '../store/store';

export const useTokenStore = () => {
  const {accessToken, refreshToken} = useStore(state => state.user);
  return {accessToken, refreshToken};
};
