import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';



const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const notify = () => toast('Todo Added Successfully');

    const submit =(e) => {
        e.preventDefault()
        if(!title || !desc){
        alert("Title or Description cannot be blank")
        }
        else {
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
      }

    }
    <ToastContainer position="top-right" />
   
    
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
    <form onSubmit={submit} className="add-to-do-form">
      <div className="mb-3" style={{width: '100%', maxWidth: '700px'}}>
        <label htmlFor="Title" className="form-label">
          Todo Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
        />
      </div>
      <div className="mb-3" style={{width: '100%', maxWidth: '700px'}}>
        <label htmlFor="desc" className="form-label">
          Todo Description
        </label>
        <input
          type="text"
          className="form-control"
          id="desc"
          value={desc}
          onChange={(e)=>{setDesc(e.target.value)}}
        />
      </div>
      <button type="submit" className="btn btn-danger" style={{display: 'flex'}} onClick={notify}>
        Add To do
      </button>
    </form>
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <ToastContainer />
    </div>
    </div>
    
  );
};

export default AddTodo;
