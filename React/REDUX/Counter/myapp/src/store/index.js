import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { stringReducer } from './stringReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
	count: counterReducer,
	string: stringReducer,
	users: usersReducer,
});

export const store = createStore(rootReducer);
