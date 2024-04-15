import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "my first project", completed: true },
    { id: 2, text: "my first project", completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const addTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(addTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
