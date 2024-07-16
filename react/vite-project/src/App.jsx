// import { useState } from "react";
import "./App.css";
// import ChildComponent from "./ChildComponent";
import ParentComponent from "./ParentComponent";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      {/* <button onClick={() => setCount(() => Math.random())}>
        count is {count}
      </button> */}
      <ParentComponent />
    </div>
  );
}

export default App;
