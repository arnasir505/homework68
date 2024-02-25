import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = () => {
  return (
    <div className='todo'>
      <form className='d-flex gap-2 mb-3'>
        <input type='text' className='form-control' />
        <button className='btn btn-primary'>Save</button>
      </form>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
