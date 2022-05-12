import create from 'zustand';
import {persist} from 'zustand/middleware';
import EncryptedStorage from 'react-native-encrypted-storage';
import {MediaAsset, User} from '../types';

type UserType = Pick<
  User,
  'id' | 'accessToken' | 'refreshToken' | 'streamToken'
>;

type Store = {
  mode: 'light' | 'dark' | 'system';
  setMode: (mode: 'light' | 'dark' | 'system') => void;
  isLoggedIn: boolean;
  toggleLoggedIn: () => void;
  user: UserType;
  updateUser: (user: UserType) => void;
};

const user: UserType = {
  id: '',
  accessToken: '',
  refreshToken: '',
  streamToken: '',
};

export const useStore = create<Store>(
  persist(
    (set, get) => ({
      mode: 'dark',
      isLoggedIn: false,
      user,
      setMode: async (mode: 'dark' | 'light' | 'system') => set({mode}),
      toggleLoggedIn: () =>
        set({
          isLoggedIn: !get().isLoggedIn,
        }),
      updateUser: (user: Partial<UserType>) =>
        set({user: {...get().user, ...user}}),
    }),
    {
      name: 'app_store',
      getStorage: () => EncryptedStorage,
    },
  ),
);
