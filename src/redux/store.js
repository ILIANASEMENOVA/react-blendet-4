import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './sliceTodo';

export const store = configureStore({
  reducer: todoReducer,
});
