export interface ApiTodo {
  title: string;
  isDone: boolean;
}

export interface Todo extends ApiTodo {
  id: string;
}

export interface ApiTodos {
  [id: string]: ApiTodo;
}

export interface TodoListState {
  items: Todo[];
  loading: boolean;
  error: boolean;
}
