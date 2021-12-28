import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action";
import { v4 as uuid } from "uuid";
export function ToDoInput() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    dispatch(addTask(payload));
    console.log(todos);
  };
  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add something"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
