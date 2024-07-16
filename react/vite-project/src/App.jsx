// import { useState } from "react";
import "./App.css";
// import ChildComponent from "./ChildComponent";
// import ParentComponent from "./ParentComponent";
// import ReactElement from "./ReactElement";
import { jsx } from "react/jsx-runtime";
import Badge from "./Badge";

function App() {
  // const [count, setCount] = useState(0);
  return jsx(Badge, {
    name: "Ashwini Paraye",
    handle: "AshwiniParaye1",
    img: "https://avatars.githubusercontent.com/u/104343839?s=400&u=e8730957db05636526e4478f7f414ab2459e61ba&v=4",
    link: "https://github.com/AshwiniParaye1",
  });
  // (
  //   <div>
  //     {/* <button onClick={() => setCount(() => Math.random())}>
  //       count is {count}
  //     </button> */}
  //     {/* <ParentComponent /> */}
  //     {/* <ReactElement /> */}

  //   </div>
  // );
}

export default App;
