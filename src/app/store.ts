import { configureStore } from '@reduxjs/toolkit';
import { todoListReducer } from '../components/TodoList/todoListSlice';
import { todoItemReducer } from '../components/TodoItem/todoItemSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    todo: todoItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
