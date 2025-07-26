
// Component to display a single todo item in a card format.
// Receives a 'data' prop (todo object) from parent (e.g., ToDoList).
export default function DisplayToDo(props) {
  const { data } = props;
  return (
    <div className="card">
      {/* Display user ID for the todo */}
      <h4>User Id : {data.userId}</h4>
      {/* Display todo text */}
      <h3 className="card-title">{data.todo}</h3>
      {/* Show status as Completed or Pending */}
      <div className="card-category">Status: {data.completed ? "Completed" : "Pending"}</div>
    </div>
  );
}