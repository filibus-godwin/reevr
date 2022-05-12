import create from 'zustand';
import {User} from '../types';

type Store = {
  users: Pick<User, 'id' | 'bio' | 'username' | 'profilePictureUrl'>[];
  addUsers: (
    users: Pick<User, 'id' | 'bio' | 'username' | 'profilePictureUrl'>[],
  ) => void;
};

export const useUserListStore = create<Store>((set, get) => ({
  users: [],
  addUsers: (
    users: Pick<User, 'id' | 'bio' | 'username' | 'profilePictureUrl'>[],
  ) => set({users: [...users]}),
}));
