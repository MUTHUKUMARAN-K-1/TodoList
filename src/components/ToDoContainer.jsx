import Todo from "./Todo";

function ToDoContainer({todos}) {
  return (
    <div className="container">
    {todos.map((todo) =>{
  return (
    <Todo todo={todo}/>
  )  
    })}
    </div>
  );
}

export default ToDoContainer;
