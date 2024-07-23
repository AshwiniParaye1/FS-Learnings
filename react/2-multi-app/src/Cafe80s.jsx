/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import delorean from "./delorean";

export default function Cafe80s() {
  const marty = React.useContext(delorean);

  return (
    <div className="location">
      <h3>Cafe80s</h3>
      <p>
        Step back in time and join us at Cafe 80's for a blast from the past!
        Enjoy a delicious meal while surrounded by iconic 80's memorabilia,
        relive the era of big hair, bright colors, and all your favorite 80's
        hits. Don't miss out on the ultimate retro dining experience!
      </p>
      <h4>Current Guests</h4>
      <ul>
        <li style={{ color: "yellow", fontWeight: "bold", fontSize: "1.5em" }}>
          {marty.name}: Age {marty.age}. {marty.occupation}.
        </li>
      </ul>
    </div>
  );
}
