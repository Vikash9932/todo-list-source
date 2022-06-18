import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodoList = (props) => {
  return (
    <div className='list-of-items'>
      {props.filters === 'all' && props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      {props.filters === 'completed' && props.todos.filter(todo => todo.isCompleted).map(todo => <TodoItem key={todo.id} todo={todo} />)}
      {props.filters === 'active' && props.todos.filter(todo => !todo.isCompleted).map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.addReducer,
    filters: state.filterReducer
  }
}

export default connect(mapStateToProps, null)(TodoList)
