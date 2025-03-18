import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progressBarContainer">
      <div
        className="progressBar"
        style={{
          width: `${progress}%`,
          color: `${progress}` < 5 ? "black" : "white"
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
