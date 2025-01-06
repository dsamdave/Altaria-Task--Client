import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrentOrder } from "@/utilities/typings";

export interface OrderState {
    currentOrder: ICurrentOrder | null;
}

export const initialState: OrderState = {
    currentOrder: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addCurrentOrder: (state, action: PayloadAction<ICurrentOrder>) => {
      state.currentOrder = action.payload;
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
});

export const { addCurrentOrder, clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
