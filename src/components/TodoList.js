import React from "react";
import TodoItem from "./TodoItem";
import "../index.css";

const TodoList = ({
  items,
  deleteData,
  toggleCompletion,
  completedClick,
  activeClick,
  allClick,
  filter,
}) => {
  var listOfItems;
  var enabledButton1 = "button",
    enabledButton2 = "button",
    enabledButton3 = "button";
  switch (filter) {
    case "completed":
      listOfItems = items
        .filter((item) => item.isCompleted === true)
        .map((item) => {
          return (
            <TodoItem
              item={item.item}
              key={item.id}
              id={item.id}
              deleteData={deleteData}
              isCompleted={item.isCompleted}
              toggleCompletion={toggleCompletion}
            />
          );
        });
      enabledButton3 = "button-enabled";
      break;
    case "active":
      listOfItems = items
        .filter((item) => item.isCompleted === false)
        .map((item) => {
          return (
            <TodoItem
              item={item.item}
              key={item.id}
              id={item.id}
              deleteData={deleteData}
              isCompleted={item.isCompleted}
              toggleCompletion={toggleCompletion}
            />
          );
        });
      enabledButton2 = "button-enabled";
      break;
    default:
      listOfItems = items.map((item) => {
        return (
          <TodoItem
            item={item.item}
            key={item.id}
            id={item.id}
            deleteData={deleteData}
            isCompleted={item.isCompleted}
            toggleCompletion={toggleCompletion}
          />
        );
      });
      enabledButton1 = "button-enabled";
      break;
  }

  return (
    <React.Fragment>
      <div className="show">Show: </div>
      <button
        type="submit"
        className={enabledButton1}
        onClick={() => {
          allClick();
        }}
      >
        All
      </button>
      <button
        type="submit"
        className={enabledButton2}
        onClick={() => {
          activeClick();
        }}
      >
        Active
      </button>
      <button
        type="submit"
        className={enabledButton3}
        onClick={() => {
          completedClick();
        }}
      >
        Completed
      </button>
      <div>{listOfItems}</div>
    </React.Fragment>
  );
};

export default TodoList;
