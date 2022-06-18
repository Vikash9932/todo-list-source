import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { addTodos } from '../reducers'

const AddItem = (props) => {
  console.log("props", props)
  const [term, setTerm] = useState('');

  const handleChange = e => setTerm(e.target.value)

  let enabledButton = 'button';

  const handleAddButton = () => {
    //   let id;
    //   if (this.state.items.length) {
    //     id = this.state.items[this.state.items.length - 1].id;
    //     id += 1;
    //   } else {
    //     id = 1;
    //   }
    //   this.setState({
    //     items: [...this.state.items, { id: id, item: term, isCompleted: false }],
    //   });
    enabledButton = 'button-enabled';
    if (term === "") { }//Do nothing
    else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: term,
        completed: false,
      });
      setTerm('')
    }
  };

  return (
    <div>
      <input
        className="input-field"
        type="text"
        name="item"
        placeholder="Add item"
        onChange={handleChange}
        value={term}
      />
      <button className={enabledButton} onClick={handleAddButton}>
        Add
      </button>
    </div>
  );
};

// const mapDispatchToProps = () => {};
const mapStateToProps = (state) => {
  return {
    todos: state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
