import * as React from "react";

function reducer(state, action) {
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return 0;
  } else {
    throw new Error("Unknown action");
  }
}

const initialState = 0;

export default function Counter() {
  const [count, dispatch] = React.useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch("increment");
  };
  const handleDecrement = () => {
    dispatch("decrement");
  };
  const handleReset = () => {
    dispatch("reset");
  };

  return (
    <main>
      <h1>{count}</h1>
      <div>
        <button style={{ marginRight: "10px" }} onClick={handleIncrement}>
          +
        </button>
        <button onClick={handleDecrement}>-</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
      </div>
    </main>
  );
}
