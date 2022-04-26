import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusState } from './types';

const initialState: StatusState = {
  value: null,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;
export default statusSlice.reducer;
