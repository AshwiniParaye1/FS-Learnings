/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

// import * as React from "react";
// import delorean from "./delorean";
// import Cafe80s from "./Cafe80s";

// export default function App() {
//   const [passengers, setPassengers] = React.useState([
//     {
//       name: "Marty McFly",
//       age: 17,
//       occupation: "High School Student",
//       catchphrase: "Whoa, this is heavy.",
//     },
//     {
//       name: "Dr. Emmett Brown",
//       age: 55,
//       occupation: "Scientist",
//       catchphrase: "Great Scott!",
//     },
//   ]);

//   return (
//     <delorean.Provider value={passengers}>
//       <Cafe80s />
//     </delorean.Provider>
//   );
// }

import * as React from "react";
import "./App.css";

const expletive = React.createContext("default value of context");

function ContextualExclamation() {
  const word = React.useContext(expletive);

  return <span>Oh! this is {word}</span>;
}

function VisitGrandmasHouse() {
  return (
    <expletive.Provider value="visit grandma's house">
      <h1>Grandma's House</h1>
      <ContextualExclamation />
    </expletive.Provider>
  );
}
function VisitFriendsHouse() {
  return (
    <React.Fragment>
      <h1>Friends House</h1>
      <ContextualExclamation />
    </React.Fragment>
  );
}

export default function App() {
  return (
    <>
      <VisitGrandmasHouse />
      <VisitFriendsHouse />
    </>
  );
}
