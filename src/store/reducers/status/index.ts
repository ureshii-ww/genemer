import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusState } from './types';

const initialState: StatusState = {
  value: '',
  newValue: '',
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    saveStatus: (state) => {
      state.value = state.newValue;
    },
    changeNewStatus: (state, {payload}: PayloadAction<string>) => {
      state.newValue = payload;
    }
  },
});

export const { saveStatus, changeNewStatus } = statusSlice.actions;
export default statusSlice.reducer;
