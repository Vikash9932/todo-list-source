import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../reducers'

let enabledButton = 'button';
const AddItem = (props) => {
  const [term, setTerm] = useState('');

  const handleChange = e => {
    if (e.target.value !== "")
      enabledButton = 'button-enabled';
    else enabledButton = 'button'
    setTerm(e.target.value)
  }


  const handleAddButton = () => {
    let id;
    if (props.todos.length) {
      id = props.todos[props.todos.length - 1].id;
      id += 1;
    } else {
      id = 1;
    }
    if (term === "") { }//Do nothing
    else {
      props.addTodo({
        id: id,
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

const mapStateToProps = (state) => {
  return {
    todos: state.addReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
