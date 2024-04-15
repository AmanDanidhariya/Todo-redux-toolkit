import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos:[{id:1, text:"my first project", completed:false}, {id:2, text:"my first project", completed:false}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:()=>{}
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer
