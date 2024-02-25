export interface Todo {
  title: string;
  isDone: boolean;
}

export interface TodoListState {
  items: Todo[];
  loading: boolean;
  error: boolean;
}
