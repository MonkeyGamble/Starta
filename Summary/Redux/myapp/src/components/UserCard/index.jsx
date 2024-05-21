import React from 'react';
import s from './UserCard.module.css';
import { deleteUserAction } from '../../store/reducers/usersReducer';
import { useDispatch } from 'react-redux';

export default function UserCard({ id, firstname, age, online }) {
	const dispatch = useDispatch();

	return (
		<div className={s.card}>
			<span
				onClick={() => {
					dispatch(deleteUserAction(id));
				}}
			>
				X
			</span>
			<p>
				<strong>Name:</strong> {firstname}
			</p>
			<p>
				<strong>Age:</strong> {age}
			</p>
			<p>
				<strong>Status:</strong> {online}
			</p>
		</div>
	);
}
