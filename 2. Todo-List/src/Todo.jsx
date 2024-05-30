import React, { useState } from "react";

// Generates a random ID
const generateId = () => Math.floor(Math.random() * 100);

const Todo = () => {
  // UseState hooks
  const [todos, SetTodos] = useState([]);
  const [input, setInput] = useState("");

  // Event Handlers
  const inputHandler = (e) => setInput(e.target.value);
  const handleSubmit = () => {
    SetTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };
  const removeTodo = (id) => SetTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <>
      <h1>Project Todo - List</h1>
      <div className="container">
        <input type="text" value={input} onChange={inputHandler} placeholder="Start typing..." />
        <button className="btn-black" onClick={handleSubmit}>
          Submit
        </button>
        <ul className="todos-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
