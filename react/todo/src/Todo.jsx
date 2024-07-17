import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({
    id: 1,
    label: "Learn React",
    completed: false,
  });
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () => {
    setTodo({ ...todo, completed: !todo.completed });
  };

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleLabelUpdate = (e) => {
    setTodo({ ...todo, label: e.target.value });
  };

  return (
    <label htmlFor="checkbox">
      <div>
        <input
          onChange={handleCheckboxClick}
          checked={todo.completed}
          type="checkbox"
          id="checkbox"
        />
        <span />
        {editing ? (
          <input onChange={handleLabelUpdate} value={todo.label} type="text" />
        ) : (
          <span>{todo.label} </span>
        )}

        <button onClick={handleEditClick}> {editing ? "Save" : "Edit"} </button>
      </div>
    </label>
  );
}
