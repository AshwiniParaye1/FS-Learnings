import * as React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    return setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
