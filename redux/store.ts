import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "./slices/authSlice";
import appointmentSlice  from "./slices/appointmentSlice";
import { loadState, saveState } from "../utilities/stateHelpers";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import type { AppDispatch, RootState } from './store';

export interface RootState {
  auth: ReturnType<typeof authReducer>;
  appointment: ReturnType<typeof appointmentSlice>;
}

const persistedState: Partial<RootState> | undefined = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointment: appointmentSlice,
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
    appointment: store.getState().appointment,
  });
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
