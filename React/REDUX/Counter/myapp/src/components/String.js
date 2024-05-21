import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeAction,
	reverseAction,
	toUpperCaseAction,
} from '../store/stringReducer';

export default function String() {
	const string = useSelector(store => store.string.string);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>String</h1>
			<h2>{string}</h2>
			<button onClick={() => dispatch(toUpperCaseAction)}>To Upper Case</button>
			<button onClick={() => dispatch(reverseAction)}>Reverse</button>
			<button onClick={() => dispatch(changeAction(+prompt()))}>Change</button>
		</div>
	);
}
