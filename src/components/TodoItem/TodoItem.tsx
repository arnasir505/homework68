import React from 'react';

interface Props {
  id: string
  title: string
  isDone: boolean
}

const TodoItem: React.FC<Props> = ({id, title, isDone}) => {
  return (
    <div className='card mb-2'>
      <div className='card-body d-flex align-items-center gap-3 fs-5'>
        <input className='form-check-input m-0' type='checkbox' checked={isDone}/>
        <p className='m-0'>{title}{id}</p>
        <button type='button' className='btn-close ms-auto fs-6' />
      </div>
    </div>
  );
};

export default TodoItem;
