import "./App.css";
import Todo from "./Todo.tsx";

function App() {
  return (
    <>
      <Todo
        title="Learn Typescript"
        description="Learn Typescript from scratch"
        completed={false}
      />
    </>
  );
}

export default App;
