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
    deleteTodo:(state, action)=>{
        state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
    },
    toggleTodo:(state, action)=>{
        const findTodo= state.todos.find(todo=>todo.id === action.payload)
        if(findTodo){
            findTodo.completed = !findTodo.completed;
        }
    }
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
