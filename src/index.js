import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const items = todos.map((d, index) => (
    <div key={index} style={{ textDecoration: d.isDone ? "line-through" : "" }}>
      {d.text}
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  ));

  const addTodo = () => {
    const newTodos = [...todos, { text: value }];
    console.log(newTodos);
    setTodos(newTodos);
    setCount(count + 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    console.log(index);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setCount(count - 1);
  };
  if (count == 0) {
    return (
      <div className="App">
        <h1>Your list is complete</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            className="input"
            onChange={e => setValue(e.target.value)}
          />
        </form>
        <button onClick={addTodo}>Add To-do</button>
      </div>
    );
  } else if (count == 1) {
    return (
      <div className="App">
        <h1>{count} thing remaining on your list</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            className="input"
            onChange={e => setValue(e.target.value)}
            />
        </form>
        <button onClick={addTodo}>Add To-do</button>
        <h5>{items}</h5>
      </div>
      )
  }
  return (
    <div className="App">
      <h1>{count} things on your list to complete</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className="input"
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <button onClick={addTodo}>Add To-do</button>
      <h5>{items}</h5>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
