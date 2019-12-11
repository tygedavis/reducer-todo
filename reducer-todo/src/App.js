import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/todoReducers';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (input) => {
    const newTodo = {
      item: input,
      completed: false,
      id: Date.now()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type: "COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList state={state}  handleComplete={handleComplete} />
      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Completed</button>
    </div>
  );
}

export default App;
