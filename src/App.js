import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import About from "./Components/About";
import AddTodo from "./Components/AddTodo";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // DELETE FUNCTION
 
  const onDelete = (todo) => {
    console.log("List has been deleted", todo);
    setTodos(
      todos.filter((todos) => {
        return todos !== todo;
      
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };



  // ADD FUNCTION
  const addTodo = (title, desc) => {
    console.log("I am adding this Todo List", title, desc);
    let sno;
    if (todos?.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos?.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <>
        <Router>
          <Header title={"My Work"} searchBar={true} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                  <>
                  {/* child */}
                    <AddTodo addTodo={addTodo} />
                    <Todos todos={todos} onDelete={onDelete} setTodos={setTodos} />
                  </>
              }
            ></Route>
            <Route  path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
