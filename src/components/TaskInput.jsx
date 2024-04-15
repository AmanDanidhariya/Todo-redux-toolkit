import { useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TaskInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEnteredValue(e.target.value);
  };

  //add todo to main array
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (enteredValue) dispatch(addTodo(enteredValue));
    setEnteredValue("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col items-center gap-y-4 "
    >
      <input
        type="text"
        name="text"
        value={enteredValue}
        onChange={handleChange}
        className="py-2 px-1  rounded-xl"
      />
      <button
        type="submit"
        className="py-2  bg-red-400 rounded-xl w-[40%] text-white hover:bg-white hover:text-red-400 duration-200 font-bold"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
