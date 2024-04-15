import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-max gap-y-7 p-11">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
