import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import { AppDispatch, RootState } from '../../app/store';
import { useEffect } from 'react';
import { addTodo, fetchTodoList } from './todoListThunks';
import Spinner from '../Spinner/Spinner';
import { changeTodo, clearTodo } from '../TodoItem/todoItemSlice';

const TodoList = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoList.items);
  const isLoading = useSelector((state: RootState) => state.todoList.loading);
  const currentTodo = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTodo(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addTodo());
    dispatch(clearTodo());
    await dispatch(fetchTodoList());
  };

  return (
    <div className='todo'>
      <form className='d-flex gap-2 mb-3' onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          className='form-control'
          name='title'
          value={currentTodo.title}
          onChange={(e) => handleChange(e)}
        />
        <button className='btn btn-primary'>Save</button>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
