import { createSlice } from '@reduxjs/toolkit';
import { TodoListState } from '../../types';
import { fetchTodoList } from './todoListThunks';

const initialState: TodoListState = {
  items: [],
  loading: false,
  error: false,
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    log: () => {
      console.log('test');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state) => {
      (state.loading = true), (state.error = false);
    });
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      (state.loading = false),
        (state.items = Object.keys(action.payload).map((id) => ({
          ...action.payload[id],
          id: id,
        })));
    });
    builder.addCase(fetchTodoList.rejected, (state) => {
      (state.loading = false), (state.error = true);
    });
  },
});

export const todoListReducer = todoListSlice.reducer;
