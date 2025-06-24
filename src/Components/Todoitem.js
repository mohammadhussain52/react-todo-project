import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todoitem = ({ todos, onDelete, onEdit }) => {
  const notify = () => toast('Todo Deleted Successfully');

  const handleDelete = () => {
    onDelete(todos); // First delete the todo
    notify();         // Then show the toast
  };

  return (
    <div className='todo-cards mt-10'>
      <div className='container'>
        <h3>{todos.title}</h3>
        <p>{todos.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={handleDelete}>
          Delete
        </button>
        <button className='btn btn-sm btn-warning ml-1' onClick={() => onEdit(todos)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Todoitem;
