import "./App.css";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
