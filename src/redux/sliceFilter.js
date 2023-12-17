import { createSlice } from '@reduxjs/toolkit';

const sliceFilter = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = sliceFilter.actions;

export const filterReducer = sliceFilter.reducer;

export const selectFilter = state => state.filter.filter;
