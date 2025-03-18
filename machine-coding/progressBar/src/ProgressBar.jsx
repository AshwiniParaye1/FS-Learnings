import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progressBarContainer">
      <div
        className="progressBar"
        style={{
          width: `${progress}%`,
          color: progress < 5 ? "black" : "white"
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
