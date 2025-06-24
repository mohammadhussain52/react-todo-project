import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Todoitem = ({todos, onDelete, onEdit}) => {
  const notify = () => toast('Todo Deleted Successfully');
  return (
    <div className='todo-cards mt-10'>
    <div className='container'>  
      <h3>{todos.title}</h3>
      <p>{todos.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=> {onDelete(todos)}}>Delete</button>
      <button className='btn btn-sm btn-warning ml-1' onClick={()=> {onEdit(todos)}}>Edit</button>
      <div className="grid place-items-center h-dvh bg-zinc-900/15">
        <ToastContainer />
         </div>
      </div>
    </div>
  )
}

export default Todoitem
