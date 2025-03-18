import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);

  return (
    <div className="progressBarContainer">
      <div
        className="progressBar"
        style={{
          //   width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
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
