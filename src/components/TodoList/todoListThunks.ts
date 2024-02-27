import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiTodos, Todo } from '../../types';
import { RootState } from '../../app/store';

export const fetchTodoList = createAsyncThunk('todoList/fetch', async () => {
  const response = await axiosApi.get<ApiTodos | null>('/tasks.json');
  return response.data ?? {};
});

export const addTodo = createAsyncThunk<void, undefined, { state: RootState }>(
  'todoList/addTodo',
  async (_arg, thunkApi) => {
    const currentTodo = thunkApi.getState().todo;
    await axiosApi.post('/tasks.json', currentTodo);
  }
);

export const deleteTodo = createAsyncThunk(
  'todoList/deleteTodo',
  async (id: string) => {
    await axiosApi.delete('/tasks/' + id + '.json');
  }
);

export const toggleChecked = createAsyncThunk<
  { data: Todo; id: string },
  string,
  { state: RootState }
>('todoList/toggleChecked', async (id: string, thunkApi) => {
  const todos = thunkApi.getState().todoList.items;
  const current = todos.filter((todo) => {
    return todo.id === id;
  })[0];
  const response = await axiosApi.put<Todo>('/tasks/' + id + '.json', {
    ...current,
    isDone: !current.isDone,
  });
  return { data: response.data, id: id };
});
