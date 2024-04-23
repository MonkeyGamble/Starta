import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoItem(props) {
	const { id, title, completed } = props;
	const { changeTodo, doubleClickRemove } = useContext(TodoContext);

	return (
		<div
			className='todo_item'
			onClick={() => changeTodo(id)}
			onDoubleClick={() => doubleClickRemove(id)}
			style={{ backgroundColor: completed ? 'green' : 'red' }}
		>
			<h2>{title}</h2>
			<p>{completed + ''}</p>
		</div>
	);
}
