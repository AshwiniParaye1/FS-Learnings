// import { useState } from "react";
import "./App.css";
// import ChildComponent from "./ChildComponent";
import ParentComponent from "./ParentComponent";
import ReactElement from "./ReactElement";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      {/* <button onClick={() => setCount(() => Math.random())}>
        count is {count}
      </button> */}
      <ParentComponent />
      <ReactElement />
    </div>
  );
}

export default App;
