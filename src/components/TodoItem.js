import React from "react";
import "../index.css";

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
        style={isCompleted ? { textDecoration: "line-through" } : {}}
        onClick={onTextClick}
      >
        {item}
      </span>

      <button className="remove-button" onClick={onButtonClick}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
