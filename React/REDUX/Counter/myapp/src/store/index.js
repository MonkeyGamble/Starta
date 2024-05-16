import { createStore } from 'redux';

const defaultStore = {
	count: 0,
};

const reducer = (store = defaultStore, action) => {
	switch (action.type) {
		case 'INCR':
			return { count: store.count + 1 };
		case 'DECR':
			return { count: store.count - 1 };
		case 'RESET':
			return { count: (store.count = 0) };
		default:
			return store;
	}
};

export const store = createStore(reducer);
