import React, { useState } from 'react';
import Todoitem from '../Components/Todoitem';
import UpdateDialogue from './UpdateDialogue';

const Todos = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [todos, setTodos] = useState(props.todos);

  const handleEdit = (obj) => {
    setSelectedData(obj);
    setEditModal(true);
  };

  const handleUpdate = (updatedTodo) => {
    const updatedList = todos.map((todo) =>
      todo.sno === updatedTodo.sno ? updatedTodo : todo
    );
    setTodos(updatedList);
    setEditModal(false);
  };

  return (
    <div className="container">
      <h3 className="m-5">Todos Works</h3>

      {todos.length === 0 ? (
        <div className="alert alert-success" role="alert">
          No Todos to display at this time
        </div>
      ) : (
        todos.map((todo) => (
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
