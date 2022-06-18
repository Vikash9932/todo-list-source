// import { combineReducers } from 'redux';
// import defaultList from '../assets/file.json';

// const listReducer = (state = [...defaultList], action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       console.log('inside list reduvcer', state);
//       return {
//         ...state,
//         todoList: [
//           ...state.todoList,
//           {
//             id: state.todoList[state.todoList.length - 1].id + 1,
//             item: action.payload,
//             isCompleted: false,
//           },
//         ],
//       };
//     default:
//       return state;
//   }
// };

// const filterListReducer = (state = [...defaultList], action) => {
//   switch (action.type) {
//     case 'FILTER_LIST':
//       console.log('inside filter list reducer', state);
//       const filteredList = state.filteredList.filter((item) => {
//         if (action.payload === 'active') return item.isCompleted === false;
//         else if (action.payload === 'completed') return item.isCompleted;
//         return item;
//       });
//       return {
//         todoList: [...filteredList],
//       };
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   // todoList: todoListReducer,
//   list: listReducer,
//   filteredList: filterListReducer,
// });

import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload)
      return state;
    }

  }
})

export const { addTodos } = addTodoReducer.actions
export const reducer = addTodoReducer.reducer;