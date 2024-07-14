import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div>
      <button onClick={() => setCount(() => Math.random())}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
