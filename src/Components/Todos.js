import React, { useState } from 'react';
import Todoitem from '../Components/Todoitem';
import UpdateDialogue from './UpdateDialogue';

const Todos = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
 
  const handleEdit = (obj) => {
    setSelectedData(obj);
    setEditModal(true);
  };

  // ✅ Update the todo in state
  const handleUpdate = (updatedTodo) => {
    const updatedList = props.todos.map((todo) =>
      todo.sno === updatedTodo.sno ? updatedTodo : todo
    );
    props.setTodos(updatedList);
    setEditModal(false);
  };

  return (
    <div className="container">
      <h3 className="m-5">Todos Works</h3>

      {props.todos?.length === 0 ? (
        <div className="alert alert-success" role="alert">
          No Todos to display at this time
        </div>
      ) : (
        props.todos?.map((todo) => (
          <Todoitem
            todos={todo}
            key={todo.sno}
            onDelete={props.onDelete}
            onEdit={() => handleEdit(todo)}
          />
        ))
      )}

      <UpdateDialogue
        isOpen={editModal}
        toggle={() => setEditModal(false)}
        title="Todo"
        data={selectedData}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default Todos;
