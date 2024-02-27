import { createSlice } from '@reduxjs/toolkit';
import { TodoListState } from '../../types';
import { toggleChecked, fetchTodoList } from './todoListThunks';

const initialState: TodoListState = {
  items: [],
  loading: false,
  error: false,
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
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
    builder.addCase(toggleChecked.fulfilled, (state, action) => {
      state.items = state.items.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload.data;
        } else {
          return todo;
        }
      });
    });
  },
});

export const todoListReducer = todoListSlice.reducer;
