import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import { useSelector } from "react-redux";

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div className="bg-white w-[50%] p-2 h-96 overflow-y-scroll">
      <ul>
        {/* first */}

        {todos.map((todo) => {
          return (
            <li key={todo.id} className="flex p-2 bg-gray-100 m-2 rounded-lg items-center justify-between">
              <div>
                <p className="text-2xl">dlkwj</p>
              </div>
              <div className="flex text-2xl items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mx-3 cursor-pointer"
                />
                <span>
                  <MdDelete className="text-red-400 hover:text-red-700 hover:cursor-pointer" />
                </span>
              </div>
            </li>
          );
        })}

        {/* first end */}
      </ul>
    </div>
  );
};

export default TaskList;
