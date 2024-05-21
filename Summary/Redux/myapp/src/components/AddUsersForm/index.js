import React from 'react';
import { useDispatch } from 'react-redux';
import { addUserAction } from '../../store/reducers/usersReducer';

export default function AddUserForm() {
	const dispatch = useDispatch();

	const submit = e => {
		e.preventDefault();
		const { firstname, age } = e.target;
		const new_user = {
			id: Date.now(),
			firstname: firstname.value,
			age: +age.value,
			online: 'true',
		};
		dispatch(addUserAction(new_user));
		e.target.reset();
	};
	return (
		<form onSubmit={submit}>
			<input placeholder='firstname' name='firstname' />
			<input placeholder='age' name='age' />
			<button>Add new user</button>
		</form>
	);
}
