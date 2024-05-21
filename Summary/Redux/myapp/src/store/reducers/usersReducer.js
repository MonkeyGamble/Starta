import { usersData } from '../../data/usersData';

const initialState = usersData;

const DELETE_USER = 'DELETE_USER';
const ADD_USER = 'ADD_USER';
const USER_ONLINE = 'USER_ONLINE';
const USER_OFFLINE = 'USER_OFFLINE';

export const deleteUserAction = user_id => ({
	type: DELETE_USER,
	payload: user_id,
});

export const addUserAction = new_user => ({
	type: ADD_USER,
	payload: new_user,
});

export const userOnlineAction = () => ({
	type: USER_ONLINE,
});

export const userOfflineAction = () => ({
	type: USER_OFFLINE,
});

export const usersReducer = (state = initialState, action) => {
	if (action.type === DELETE_USER) {
		return state.filter(elem => elem.id !== action.payload);
	} else if (action.type === ADD_USER) {
		return [...state, action.payload];
	} else if (action.type === USER_ONLINE) {
		return state.map(el => {
			el.online = true;
			return el;
		});
	} else if (action.type === USER_OFFLINE) {
		return state.map(el => {
			el.online = false;
			return el;
		});
	}
	return state;
};
