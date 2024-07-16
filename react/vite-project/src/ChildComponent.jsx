import "./App.css";

// eslint-disable-next-line react/prop-types
const ChildComponent = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export default ChildComponent;
