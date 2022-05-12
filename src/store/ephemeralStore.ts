import create from 'zustand';
import {MediaAsset, Post} from '../types';

type Store = {
  uploadBatch: Post[];
  refreshProfileCount: number;
  addToUploadBatch: (batch: Omit<Post, 'author'>) => void;
  removeFromUploadBatch: (index: number) => void;
  incrementRefreshProfileCount: () => void;
};

export const useEphemeralStore = create<Store>((set, get) => ({
  uploadBatch: [],
  refreshProfileCount: 0,
  addToUploadBatch: batch => set({uploadBatch: [...get().uploadBatch, batch]}),
  removeFromUploadBatch: index =>
    set({
      uploadBatch: get().uploadBatch.filter((_val, idx) => index !== idx),
    }),
  incrementRefreshProfileCount: () =>
    set({refreshProfileCount: (get().refreshProfileCount += 1)}),
}));
