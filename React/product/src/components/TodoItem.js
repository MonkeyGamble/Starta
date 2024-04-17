import React from 'react';

export default function TodoItem(props) {
	const { id, title, completed, changeTodo, removeTodo } = props;
	return (
		<div
			className='todo_item'
			onClick={() => changeTodo(id)}
			onDoubleClick={() => removeTodo(id)}
			style={{ backgroundColor: completed ? 'green' : 'red' }}
		>
			<h2>{title}</h2>
			<p>{completed + ''}</p>
		</div>
	);
}
