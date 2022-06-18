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
    },

    //Update todos
    updateTodo: (state, action) => {
      state.map(item => { if (item.id === action.payload.id) item.item = action.payload.item; return item; })
    }
  }
})

const initialFilter = 'all'

const filterTodoReducer = createSlice({
  name: 'filterTodos',
  initialState: initialFilter,
  reducers: {
    //FilterTodo
    filterTodo: (state, action) => {
      if (action.payload) return action.payload
      return state
    }
  }
})

export const { addTodo, removeTodo, toggleCompletionTodo, updateTodo } = addTodoReducer.actions
export const { filterTodo } = filterTodoReducer.actions;
export const addReducer = addTodoReducer.reducer;
export const filterReducer = filterTodoReducer.reducer;