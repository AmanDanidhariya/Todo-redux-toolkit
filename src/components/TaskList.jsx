import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todoSlice";

const TaskList = () => {
  // select all todos from todoSlice
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  return (
    <div className="bg-white w-[50%] p-2 h-96 overflow-y-scroll">
      <ul>
        {/* first */}

        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex p-2 bg-gray-100 m-2 rounded-lg items-center justify-between"
            >
              <div
                className={`text-2xl ${todo.completed ? "line-through	" : ""}`}
              >
                {todo.text}
              </div>
              <div className="flex text-2xl items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mx-3 cursor-pointer"
                  checked={todo.completed}
                  onChange={() => {
                    dispatch(toggleTodo(todo.id));
                  }}
                />
                <span>
                  <MdDelete
                    className="text-red-400 hover:text-red-700 hover:cursor-pointer"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  />
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
