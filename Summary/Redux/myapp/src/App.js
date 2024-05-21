import React from 'react';
import UsersContainer from './components/UsersContainer/index.jsx';
import AddUserForm from './components/AddUsersForm/index.js';
import { useDispatch } from 'react-redux';
import {
	userOnlineAction,
	userOfflineAction,
} from './store/reducers/usersReducer.js';

export default function App() {
	const dispatch = useDispatch();

	const userOnline = () => {
		dispatch(userOnlineAction());
	};
	const userOffline = () => {
		dispatch(userOfflineAction());
	};

	return (
		<div>
			<AddUserForm />
			<UsersContainer />
			<button onClick={userOnline}>ONLINE</button>
			<button onClick={userOffline}>OFFLINE</button>
		</div>
	);
}
