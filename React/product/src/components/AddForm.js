import React from 'react';

export default function AddForm(props) {
	const { addTodo } = props;

	function addHandle(e) {
		if (e.key === 'Enter') {
			addTodo(e.target.value);
		}
	}

	return (
		<div className='input_elem'>
			<input onKeyDown={addHandle} />
		</div>
	);
}
