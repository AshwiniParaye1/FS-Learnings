import React from "react";

export default function Linear() {
  const [linear, setLinear] = React.useState(0);
  const [exponential, setExponential] = React.useState(1);

  const handleClick = () => {
    setLinear(linear + 1);
    setExponential(exponential * 2);

    console.log({ linear, exponential });
  };

  return (
    <main>
      <p>Linear: {linear}</p>
      <p>Exponential: {exponential}</p>
      <button onClick={handleClick}>Do Math</button>
    </main>
  );
}
