import React from 'react'

const Todoitem = ({todos, onDelete, onEdit}) => {
  return (
    <div className='todo-cards mt-10'>
    <div className='container'>  
      <h3>{todos.title}</h3>
      <p>{todos.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=> {onDelete(todos)}}>Delete</button>
      <button className='btn btn-sm btn-warning ml-1' onClick={()=> {onEdit(todos)}}>Edit</button>
      </div>
    </div>
  )
}

export default Todoitem
