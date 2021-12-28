import { ToDoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}
