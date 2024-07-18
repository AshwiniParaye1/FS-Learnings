/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Todo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  // const [completed, setCompleted] = useState(false);
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
          <span />
          {editing ? (
            <input onChange={handleEditTodo} value={todo.label} type="text" />
          ) : (
            <span>{todo.label} </span>
          )}

          <button onClick={handleEditClick}>
            {" "}
            {editing ? "Save" : "Edit"}{" "}
          </button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </label>
    </li>
  );
}
