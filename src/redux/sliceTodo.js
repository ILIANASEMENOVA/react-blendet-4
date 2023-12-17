import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};
export const sliceTodo = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = sliceTodo.actions;

export const todoReducer = sliceTodo.reducer;

export const selectTodos = state => state.todos.todos;
