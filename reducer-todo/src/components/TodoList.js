import React, { useState, useReducer } from 'react';
import Todo from './Todo';

const TodoList = props => {
  return(
    <div>
      {props.state.map((item) => {
        return <Todo item={item} key={item.id} handleComplete={props.handleComplete} />
      })}
    </div>
  )
};

export default TodoList;