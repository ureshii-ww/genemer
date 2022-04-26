import {
  LoadUniversitiesPayload,
  LoadUniversitiesPayloadSuccess,
  UniversitiesState,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UniversitiesState = {
  data: null,
  isLoading: false,
};

const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {
    loadUniversities: (state, action: PayloadAction<LoadUniversitiesPayload>) => {
      state.isLoading = true;
    },
    loadUniversitiesSuccess: (
      state,
      { payload }: PayloadAction<LoadUniversitiesPayloadSuccess>
    ) => {
      state.data = payload;
      state.isLoading = false;
    },
    loadUniversitiesFailure: state => {
      state.isLoading = false;
    },
  },
});

export const { loadUniversities, loadUniversitiesSuccess, loadUniversitiesFailure } =
  universitiesSlice.actions;
export default universitiesSlice.reducer;
