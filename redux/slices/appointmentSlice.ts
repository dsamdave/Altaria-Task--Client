import { IAppointmentPayload } from '@/utilities/typings/typingsForUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppointmentState {
  currentAppointmentPayload: IAppointmentPayload | null;
}

const initialState: AppointmentState = {
  currentAppointmentPayload: null,
};

const AppointmentSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addAppointmentPayload(state, action: PayloadAction<Partial<IAppointmentPayload>>) {

        state.currentAppointmentPayload = {
          ...state.currentAppointmentPayload,
          ...action.payload,  
        };
    },
    resetAppointmentPayload(state) {
      state.currentAppointmentPayload = null;
    },
  },
});

export const { addAppointmentPayload, resetAppointmentPayload } = AppointmentSlice.actions;
export default AppointmentSlice.reducer;
