import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './AddItem';
import TodoList from './TodoList';
import FilterOptions from './FilterOptions'
import data from '../assets/file.json';

class App extends React.Component {
  state = { items: '', filter: 'all', isLoading: true };

  async componentDidMount() {
    // const response = await axios.get('../assets/file.json');
    this.setState({ items: data });
    this.setState({ isLoading: false });
  }



  deleteData = (id) => {
    const newList = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: newList });
  };

  toggleCompletion = (id) => {
    const updatedList = this.state.items.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    this.setState({ items: updatedList });
  };

  completedClick = () => {
    this.setState({ filter: 'completed' });
  };

  activeClick = () => {
    this.setState({ filter: 'active' });
  };

  allClick = () => {
    this.setState({ filter: 'all' });
  };

  render() {
    if (this.state.isLoading) {
      return 'Loading...';
    }
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
}

export default App;
