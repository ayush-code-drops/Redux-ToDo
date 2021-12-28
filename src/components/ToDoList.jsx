import { useSelector } from "react-redux";

export function ToDoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      {todos?.map((item) => {
        return <div key={item.id}>{`${item.title} - ${item.status}`}</div>;
      })}
    </div>
  );
}
