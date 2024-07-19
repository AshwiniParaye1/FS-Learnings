import * as React from "react";
import Wave from "./Wave";

function Greetings({ name }) {
  const [index, setIndex] = React.useState(
    Number(localStorage.getItem("index"))
  );

  const greetings = ["Hello", "Hola", "Bonjour"];

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);

    localStorage.setItem(index, index);
  };

  return (
    <main>
      <h1>
        {greetings[index]}, {name}
      </h1>
      <button onClick={handleClick}>Next Greeting</button>
      <br />
      <br />
      <Wave />
    </main>
  );
}

export default Greetings;

{
  /* greetings initiates a rerendering
as the state is changed everytime button is clicked */
}
