import create from 'zustand';
import {User} from '../types';

type Store = {
  profiles: {[id: string]: Partial<User>};
  addProfile: (id: string, user: Partial<User>) => void;
  getProfile: (id: string) => Partial<User>;
} & {};

export const useProfileStore = create<Store>((set, get) => ({
  profiles: {},
  addProfile: (id: string, user: Partial<User>) =>
    set({profiles: {...get().profiles, [id]: user}}),
  getProfile: (id: string) => get().profiles[id],
}));
