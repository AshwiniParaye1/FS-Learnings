import * as React from "react";

function reducer(state, value) {
  const nextState = state + value;

  console.log(
    `Reducer invoked. state: ${state}, value: ${value}, nextState: ${nextState}`
  );

  return nextState;
}

const initialState = 0;

export default function Counter() {
  const [count, dispatch] = React.useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch(1);
  };

  return (
    <main>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
    </main>
  );
}
