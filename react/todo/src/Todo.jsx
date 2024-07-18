import React, { useState } from "react";
import "./App.css";
export default function Todo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleEditTodo = (e) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id);
  };

  return (
    <li>
      <label htmlFor={todo.id}>
        <div>
          <input
            onChange={handleCheckboxClick}
            checked={todo.completed}
            type="checkbox"
            id={todo.id}
          />
          {editing ? (
            <input onChange={handleEditTodo} value={todo.label} type="text" />
          ) : (
            <span className={todo.completed ? "completed" : ""}>
              {todo.label}
            </span>
          )}
        </div>
        <div>
          <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </label>
    </li>
  );
}
