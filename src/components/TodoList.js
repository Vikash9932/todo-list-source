import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { removeTodo, toggleCompletionTodo } from '../reducers'
import '../index.css';

const TodoList = (props) => {
  console.log("props in todolist", props);

  const deleteItem = (id) => {
    props.removeTodo(id)
  }

  const toggleCompletion = (id) => {
    console.log("togg ", id)
    props.toggleCompletionTodo(id)
  }

  return (
    props.todos.map(todo => <TodoItem key={todo.id} item={todo.item} id={todo.id} isCompleted={todo.isCompleted} deleteItem={deleteItem} toggleCompletion={toggleCompletion} />)
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const dispatchStatetoProps = dispatch => {
  return {
    removeTodo: obj => dispatch(removeTodo(obj)),
    toggleCompletionTodo: obj => dispatch(toggleCompletionTodo(obj))
  }
}

export default connect(mapStateToProps, dispatchStatetoProps)(TodoList)
