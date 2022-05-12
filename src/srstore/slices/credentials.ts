import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Credentials = {
  id: string;
  accessToken: string;
  refreshToken: string;
  streamToken: string;
};

const initialState: Credentials = {
  accessToken: '',
  id: '',
  refreshToken: '',
  streamToken: '',
};

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    addCredentials: (state, action: PayloadAction<Credentials>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.streamToken = action.payload.streamToken;
      state.id = action.payload.id;
    },

    updateCredentials: (
      state,
      {payload}: PayloadAction<Partial<Credentials>>,
    ) => {
      state = {...state, ...payload};
    },

    resetCredentials: state => {
      state = initialState;
    },
  },
});

export const {addCredentials, resetCredentials, updateCredentials} =
  credentialsSlice.actions;

export const credentialsSliceReducers = credentialsSlice.reducer;
