import React from "react";
import "../src/App.css";
import ProgressBar from "./ProgressBar";

const App = () => {
  const progressBars = [1, 5, 10, 20, 30, 50, 70, 90, 100];

  return (
    <div className="container">
      <h1 className="title">Progress Bar</h1>
      {progressBars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
};

export default App;
