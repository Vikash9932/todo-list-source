import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './AddItem';
import TodoList from './TodoList';
import FilterOptions from './FilterOptions'

const App = () => {
  return (
    <div className="main">
      <h2 align="center">ToDo List</h2>
      <br />
      <span align="center">
        <AddItem />
        <FilterOptions />
      </span>
      <TodoList />
    </div>
  );

}

export default App;
