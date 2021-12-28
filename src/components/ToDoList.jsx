import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../redux/action";

export function ToDoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };
  console.log(todos);
  return (
    <div>
      {todos?.map((item) => {
        return (
          <div key={item.id}>
            {`${item.title} - ${item.status}`}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleToggle(item.id)}>Toggle</button>
          </div>
        );
      })}
    </div>
  );
}
