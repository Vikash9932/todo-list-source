import { createSlice } from '@reduxjs/toolkit'
import data from '../assets/file.json'

const initialState = [...data]

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //Adding todos
    addTodo: (state, action) => {
      state.push(action.payload)
      return state;
    },

    //Removing todos
    removeTodo: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },

    //Toggle completion of todos
    toggleCompletionTodo: (state, action) => {
      state.map(item => { if (item.id === action.payload) item.isCompleted = !item.isCompleted; return item; })
    }
  }
})

export const { addTodo, removeTodo, toggleCompletionTodo } = addTodoReducer.actions
export const reducer = addTodoReducer.reducer;