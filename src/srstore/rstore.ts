import {configureStore} from '@reduxjs/toolkit';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import {credentialsSliceReducers} from './slices/credentials';
import {postSliceReducers} from './slices/posts';
import {profilesSliceReducers} from './slices/profiles';

export const rootstore = configureStore({
  reducer: {
    credentials: credentialsSliceReducers,
    profiles: profilesSliceReducers,
    posts: postSliceReducers,
  },
  // devTools: true,
});

type RootState = ReturnType<typeof rootstore.getState>;

type AppDispatch = typeof rootstore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// export default rootstore;
