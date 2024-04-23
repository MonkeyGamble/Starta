import React from 'react';
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';
import { TodoContext } from './context/TodoContext';

export default function App() {
	const start_todo = [
		{ id: 1, title: 'Помыть руки', completed: true },
		{ id: 2, title: 'Сделать зарядку', completed: false },
		{ id: 3, title: 'Наконец изучить React', completed: true },
	];

	//Оператор нулевого слияния

	let defaultState = JSON.parse(localStorage.getItem('todos')) ?? start_todo;

	const [todos, setTodos] = useState(defaultState);

	function changeTodo(id) {
		let changedTodos = todos.map(elem => {
			if (elem.id === id) {
				elem.completed = !elem.completed;
			}
			return elem;
		});
		setTodos(changedTodos);
	}

	function doubleClickRemove(id) {
		let filteredTodos = todos.filter(elem => elem.id !== id);
		setTodos(filteredTodos);
	}

	function addTodo(title) {
		let newTodo = {
			id: Date.now(),
			title,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	}

	// useEffect(() => {
	// 	let savedTodos = localStorage.getItem('todos');
	// 	setTodos(JSON.parse(savedTodos));
	// }, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<div>
			<TodoContext.Provider value={{ changeTodo, doubleClickRemove }}>
				<AddForm addTodo={addTodo} />
				<TodoList
					todos={todos}
					// changeTodo={changeTodo}
					// removeTodo={doubleClickRemove}
				/>
			</TodoContext.Provider>
		</div>
	);
}
