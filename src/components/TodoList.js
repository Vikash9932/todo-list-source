import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodoList = (props) => {

  return (
    props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, null)(TodoList)
