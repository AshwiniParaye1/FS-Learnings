/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Slider from "./Slider";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);
  const handleReset = () => setCount(0);
  const handleUpdateStep = (step) => setStep(step);

  React.useEffect(() => {
    console.log("useEffect called");
    const id = window.setInterval(() => {
      setCount((c) => c + step);
    }, 1000);

    return () => window.clearInterval(id);
  }, [step]);
  return (
    <main>
      <h1>{count}</h1>
      <div>
        <button style={{ marginRight: "10px" }} onClick={handleDecrement}>
          -
        </button>
        <button onClick={handleIncrement}>+</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
        <br />
        <br />
      </div>
      <Slider min={1} max={10} onChange={handleUpdateStep} />
    </main>
  );
}
