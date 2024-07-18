import React from "react";
import "./App.css";
function createTodo(label) {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  };
}

export default function TodoComposer({ handleAddTodo }) {
  const [label, setLabel] = React.useState("");

  const handleUpdateLabel = (e) => {
    setLabel(e.target.value);
  };

  const handleAddTodoClick = () => {
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
  };

  return (
    <li className="todo-composer">
      <input
        type="text"
        value={label}
        onChange={handleUpdateLabel}
        placeholder="Add a new todo"
      />
      <button disabled={label.length === 0} onClick={handleAddTodoClick}>
        Add Todo
      </button>
    </li>
  );
}
