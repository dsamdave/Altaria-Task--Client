import { configureStore } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./slices/authSlice";
import { loadState, saveState } from "../utilities/stateHelpers";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import type { AppDispatch, RootState } from './store';

export interface RootState {
  auth: ReturnType<typeof authReducer>;
}

const persistedState: Partial<RootState> | undefined = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
