import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function String() {
	const string = useSelector(store => store.string.string);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>String</h1>
			<h2>{string}</h2>
			<button onClick={() => dispatch({ type: 'TO_UPPER_CASE' })}>
				To Upper Case
			</button>
			<button onClick={() => dispatch({ type: 'REVERSE' })}>Reverse</button>
			<button onClick={() => dispatch({ type: 'CHANGE', payload: 5 })}>
				Change
			</button>
		</div>
	);
}
