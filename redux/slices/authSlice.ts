import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/utilities/typings";

export interface AuthState {
  currentUser: IUser | null;
}

export const initialState: AuthState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
      sessionStorage.setItem('accessToken', action.payload.accessToken);
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
      sessionStorage.removeItem('accessToken');
    },
  },
});

export const { addCurrentUser, clearCurrentUser } = authSlice.actions;
export default authSlice.reducer;
