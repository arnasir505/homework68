import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { addChecked, deleteTodo, fetchTodoList } from '../TodoList/todoListThunks';

interface Props {
  id: string;
  title: string;
  isDone: boolean;
}

const TodoItem: React.FC<Props> = ({ id, title, isDone }) => {
  const dispatch: AppDispatch = useDispatch();
  const onDelete = async (id: string) => {
    await dispatch(deleteTodo(id));
    await dispatch(fetchTodoList());
  };

  const onChecked = async (id: string) => {
    await dispatch(addChecked(id));
  };

  return (
    <div className='card mb-2'>
      <div className='card-body d-flex align-items-center gap-3 fs-5'>
        <input
          className='form-check-input m-0'
          type='checkbox'
          name='isDone'
          checked={isDone}
          onChange={() => onChecked(id)}
        />
        <p className='m-0'>{title}</p>
        <button
          type='button'
          className='btn-close ms-auto fs-6'
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
