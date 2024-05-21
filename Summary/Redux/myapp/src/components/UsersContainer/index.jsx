import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../UserCard/index';
import s from './UsersContainer.module.css';

export default function UsersContainer() {
	const usersState = useSelector(store => store.users);

	return (
		<div className={s.container}>
			{usersState.map(elem => (
				<UserCard key={elem.id} {...elem} />
			))}
		</div>
	);
}
