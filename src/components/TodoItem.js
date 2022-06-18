import React from 'react';
import { connect } from 'react-redux';

import { AiOutlineCloseCircle, AiOutlineSave } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi'
import { removeTodo, toggleCompletionTodo, updateTodo } from '../reducers';

const TodoItem = ({ todo, removeTodo, toggleCompletion, updateTodo }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [term, setTerm] = React.useState('')

  const onButtonClick = () => {
    removeTodo(todo.id);
  };

  const handleChange = (e) => setTerm(e.target.value)

  const onTextClick = () => {
    toggleCompletion(todo.id);
  };

  const editButton = () => {
    setTerm(todo.item)
    setEditMode(true)
  }

  const saveButton = () => {
    updateTodo({
      id: todo.id,
      item: term,
    })
    setEditMode(false)
  }

  return (
    <div className="todoItem">
      {editMode ? <input onChange={handleChange} value={term} type="text" /> : <span
        className="each-item"
        style={todo.isCompleted ? { textDecoration: 'line-through' } : {}}
        onClick={onTextClick}
      >
        {todo.item}
      </span>}

      {editMode ? <AiOutlineSave className='remove-button'
        onClick={saveButton}
        size={25} /> : <FiEdit2
        className='edit-button'
        onClick={editButton}
        size={20}
      />}

      <AiOutlineCloseCircle
        className="remove-button"
        onClick={onButtonClick}
        size={25}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: obj => dispatch(removeTodo(obj)),
    toggleCompletion: obj => dispatch(toggleCompletionTodo(obj)),
    updateTodo: obj => dispatch(updateTodo(obj))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
