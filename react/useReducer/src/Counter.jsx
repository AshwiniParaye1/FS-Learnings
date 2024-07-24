import * as React from "react";
import Slider from "./Slider";

function reducer(state, action) {
  if (action === "increment") {
    return {
      count: state.count + 1,
      step: state.step,
    };
  } else if (action === "decrement") {
    return {
      count: state.count - 1,
      step: state.step,
    };
  } else if (action === "reset") {
    return {
      count: 0,
      step: state.step,
    };
  } else {
    throw new Error("This action type isn't supported.");
  }
}

const initialState = { count: 0, step: 1 };

export default function Counter() {
  const [count, dispatch] = React.useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });
  const handleUpdateStep = (step) =>
    dispatch({
      type: "updateStep",
      step,
    });

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
      <br />
      <br />
      <Slider min={1} max={10} onChange={handleUpdateStep} />
    </main>
  );
}
