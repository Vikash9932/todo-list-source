import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import '../index.css';

const TodoList = (props) => {
  console.log("props in todolist", props);
  return (
    props.todos.map(todo => <TodoItem key={todo.id} item={todo.item} id={todo.id} />)
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, null)(TodoList)
