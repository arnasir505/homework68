import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { RootState } from '../../app/store';

export const addChecked = createAsyncThunk<void, string, { state: RootState }>(
  'todoList/addChecked',
  async (id: string, thunkApi) => {
    const todos = thunkApi.getState().todoList.items;
    const current = todos.filter(todo => {
      return todo.id === id;
    })[0];
    console.log(current);
    await axiosApi.put('/tasks/' + id + '.json', {...current, isDone: !current.isDone});
  }
);
