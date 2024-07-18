/* eslint-disable react-refresh/only-export-components */
import React from "react";

function Wave() {
  console.count("Rendering Wave");
  return (
    <span role="img" aria-label="hand waving">
      👋
    </span>
  );
}

export default React.memo(Wave);
