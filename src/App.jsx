import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer"; // Make sure the filename matches this import

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== '') {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
    }
  }

  console.log(todos);

  return (
    <main>
      <h1>To Do list</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <ToDoContainer todos={todos}/>   
    </main>
  );
}

export default App;
