import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import selectedServiceSlice from "./slices/selectedServiceSlice";
import orderSlice from "./slices/orderSlice";
import { loadState, saveState } from "../utilities/stateHelpers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface RootState {
  auth: ReturnType<typeof authReducer>;
  selectedService: ReturnType<typeof selectedServiceSlice>;
  currentOrder: ReturnType<typeof orderSlice>;
}


const persistedState = typeof window !== "undefined" ? loadState() : undefined;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    selectedService: selectedServiceSlice,
    currentOrder: orderSlice,
  },
  preloadedState: persistedState,  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

 
if (typeof window !== "undefined") {
  store.subscribe(() => {
    const state = {
      auth: store.getState().auth,
      selectedService: store.getState().selectedService,
      currentOrder: store.getState().currentOrder,
    };
    saveState(state);
  });
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
