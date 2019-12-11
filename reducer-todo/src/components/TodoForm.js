import React, { useState, useReducer } from 'react';
import TodoList from './TodoList';

import { reducer, initialState } from '../reducers/todoReducers';

const TodoForm = props => {
  const [form, setForm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  }


  return(
    <form onSubmit={(e) => {
      e.preventDefault()
      props.addTodo(form)
      setForm('')
    }}>
      <div>
        <input 
          type="text" 
          placeholder='What do you have to do?'
          name='todo'
          value={form}
          onChange={(e) => {
            setForm(e.target.value)
          }}
          />
        <button type='submit'>Add</button>
      </div>
    </form>
  )
};

export default TodoForm;