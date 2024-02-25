import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import { AppDispatch, RootState } from '../../app/store';
import { useEffect } from 'react';
import { fetchTodoList } from './todoListThunks';

const TodoList = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoList.items);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <div className='todo'>
      <form className='d-flex gap-2 mb-3'>
        <input type='text' className='form-control' />
        <button className='btn btn-primary'>Save</button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
};

export default TodoList;
