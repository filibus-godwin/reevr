import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Profile} from '../../types';

const initialState: {[id: string]: Profile} = {};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addProfile: (state, {payload}: PayloadAction<Profile>) => {
      state[payload.id] = payload;
    },
    updateProfile: (state, {payload}: PayloadAction<Partial<Profile>>) => {
      if (!payload.id) throw new Error('Id must be present');

      if (!state[payload.id])
        throw new Error('Profile does not exist in the store');

      state[payload.id] = {...state[payload.id], ...payload};
    },
    resetProfiles: state => {
      state = initialState;
    },
  },
});

export const {addProfile, resetProfiles} = profilesSlice.actions;

export const profilesSliceReducers = profilesSlice.reducer;
