/* eslint-disable react/prop-types */
import * as React from "react";

export default function Slider({ min, max, onChange }) {
  const [value, setValue] = React.useState(min);

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>Step: {value}</p>
    </div>
  );
}
