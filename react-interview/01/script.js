function Counter() {
  const [count, setCount] = React.useState(0);

  //   let count1 = 0;

  function increment() {
    // count1 = count1 + 1;
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  //   const counter = React.createElement(
  //     "div",
  //     null,
  //     React.createElement("p", null, `Count: ${count}`),
  //     React.createElement("button", { onClick: increment }, `Increment`)
  //   );

  console.log("counter rendered");

  //   return counter;

  return (
    <div>
      <p>Count: {count}</p>
      {/* <p>Count: {count1}</p> */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const CounterParent = () => {
  const [showMsg, setShowMsg] = React.useState(false);
  const [showMsg2, setShowMsg2] = React.useState(false);
  const [toggleCount, setToggleCount] = React.useState(false);

  const toggleMsg = () => {
    setShowMsg(!showMsg);
    setShowMsg2(!showMsg2);
  };

  console.log("Parent rendered");

  return (
    <div>
      {toggleCount ? (
        <div>
          <h1>Counter</h1>
          <Counter />
        </div>
      ) : (
        <span>
          <p>Counter Off</p>
        </span>
      )}

      <button onClick={() => setToggleCount(!toggleCount)}>
        Toggle Counter
      </button>

      <br />
      {showMsg && <b>Now you see me </b>}
      <br />
      {showMsg2 && <b>Now you see me Again </b>}
      <button onClick={toggleMsg}>Show Message</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(CounterParent));
