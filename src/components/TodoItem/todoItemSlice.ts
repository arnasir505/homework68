import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiTodo } from '../../types';

const initialState: ApiTodo = {
  title: '',
  isDone: false,
};

export const todoItemSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeTodo: (
      state,
      action: PayloadAction<string>
    ) => {
      state.title = action.payload;
    },
    clearTodo: (state) => {
      (state.title = ''), (state.isDone = false);
    },
  },
});

export const todoItemReducer = todoItemSlice.reducer;
export const { changeTodo, clearTodo } = todoItemSlice.actions;
