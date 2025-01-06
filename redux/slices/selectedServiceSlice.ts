import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISelectedService } from "@/utilities/typings";

export interface SelectedState {
    currentService: ISelectedService | null;
}

export const initialState: SelectedState = {
  currentService: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    addSelectedService: (state, action: PayloadAction<ISelectedService>) => {
      state.currentService = action.payload;
    },
    clearSelectedService: (state) => {
      state.currentService = null;
    },
  },
});

export const { addSelectedService, clearSelectedService } = serviceSlice.actions;
export default serviceSlice.reducer;
