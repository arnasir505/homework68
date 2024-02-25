import React from 'react';

const TodoItem: React.FC = () => {
  return (
    <div className='card mb-2'>
      <div className='card-body d-flex align-items-center gap-3 fs-5'>
        <input className='form-check-input m-0' type='checkbox' />
        <p className='m-0'>Todo item</p>
        <button type='button' className='btn-close ms-auto fs-6' />
      </div>
    </div>
  );
};

export default TodoItem;
