import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { stringReducer } from './stringReducer';

const rootReducer = combineReducers({
	count: counterReducer,
	string: stringReducer,
});

export const store = createStore(rootReducer);
