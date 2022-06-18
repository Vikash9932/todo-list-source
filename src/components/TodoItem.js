import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const TodoItem = ({ item, id, deleteData, isCompleted, toggleCompletion }) => {
  const onButtonClick = () => {
    deleteData(id);
  };

  const onTextClick = () => {
    toggleCompletion(id);
  };

  return (
    <div className="todoItem">
      <span
        className="each-item"
        style={isCompleted ? { textDecoration: 'line-through' } : {}}
        onClick={onTextClick}
      >
        {item}
      </span>

      <AiOutlineCloseCircle
        className="remove-button"
        onClick={onButtonClick}
        size={25}
      />
    </div>
  );
};

export default TodoItem;
