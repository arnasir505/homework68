import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { RootState } from '../../app/store';

export const addTodo = createAsyncThunk<void, undefined, { state: RootState }>(
  'todoList/addTodo',
  async (_arg, thunkApi) => {
    const currentTodo = thunkApi.getState().todo;
    await axiosApi.post('/tasks.json', currentTodo);
  }
);
