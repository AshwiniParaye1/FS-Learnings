/* eslint-disable no-unused-vars */
import * as React from "react";
import delorean from "./delorean";
import Cafe80s from "./Cafe80s";

export default function App() {
  const [passengers, setPassengers] = React.useState([
    {
      name: "Marty McFly",
      age: 17,
      occupation: "High School Student",
      catchphrase: "Whoa, this is heavy.",
    },
    {
      name: "Dr. Emmett Brown",
      age: 55,
      occupation: "Scientist",
      catchphrase: "Great Scott!",
    },
  ]);

  return (
    <delorean.Provider value={passengers}>
      <Cafe80s />
    </delorean.Provider>
  );
}
