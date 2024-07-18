import React from "react";

export default function Counter2() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button style={{ marginRight: "10px" }} onClick={handleIncrement}>
        +
      </button>

      <button onClick={handleDecrement}>-</button>
    </>
  );
}
