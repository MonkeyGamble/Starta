import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ageFilterAction, deleteUserAction} from "../store/usersReducer";

export default function Users() {

	const users = useSelector(store=> store.users.users)
const dispatch = useDispatch();

	return <div><h1>Users</h1>
		<div>
			<button onClick={() => dispatch(deleteUserAction())}>Delete Last User</button>
			<button onClick={() => dispatch(ageFilterAction())}>Age filter</button>
		</div>
		<ul>
			{users.map(elem => <li key={elem.id}>{elem.firstName}</li>)}
		</ul>


	</div>;
}

// Реализуйте удаление пользователя по нажатию на li-элемент