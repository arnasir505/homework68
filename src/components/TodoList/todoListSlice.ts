import { createSlice } from '@reduxjs/toolkit';
import { TodoListState } from '../../types';

const initialState: TodoListState = {
  items: [],
  loading: false,
  error: false
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
});
