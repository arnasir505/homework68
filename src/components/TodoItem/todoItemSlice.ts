import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types";

const initialState: Todo = {
  title: '',
  isDone: false
}

export const todoItemSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {}
})