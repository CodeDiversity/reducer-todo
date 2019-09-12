import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import './components/TodoList.js';
import { todoReducer, initialState } from './reducers/index';
import TodoList from './components/TodoList.js';

function App() {
	const [ state, dispatch ] = useReducer(todoReducer, initialState);
	const addTodo = (item) => dispatch({ type: 'ADD_TODO', payload: item });
	const toggleComplete = (id) => dispatch({ type: 'TOGGLE_COMPLETE', id: id });
	const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

	return (
		<div className='App'>
			<TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
			<TodoList todos={state.todos} toggleComplete={toggleComplete} />
		</div>
	);
}

export default App;
