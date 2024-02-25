import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiTodos } from '../../types';

export const fetchTodoList = createAsyncThunk('todoList/fetch', async () => {
  const response = await axiosApi.get<ApiTodos | null>('/tasks.json');
  return response.data ?? {};
});

export const deleteTodo = createAsyncThunk(
  'todoList/deleteTodo',
  async (id: string) => {
    await axiosApi.delete('/tasks/' + id + '.json');
  }
);
