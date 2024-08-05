//create a react component that takes todo as an input and renders them

interface TodoProps {
  title: string;
  description: string;
  completed: boolean;
}
function Todo(props: TodoProps) {
  // const { title, description, completed } = props;

  return (
    <div>
      {/* <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{completed ? "Completed" : "Not Completed"}</h3> */}
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.completed ? "Completed" : "Not Completed"}</h3>
    </div>
  );
}

export default Todo;
