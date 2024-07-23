import * as React from "react";
import "./App.css";

const delorean = React.createContext([
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

export default delorean;
