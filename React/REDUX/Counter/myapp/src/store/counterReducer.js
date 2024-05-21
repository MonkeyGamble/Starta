const defaultState = {
	count: 0,
};

export const counterReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'INCR':
			return { count: state.count + 1 };
		case 'DECR':
			return { count: state.count - 1 };
		case 'RESET':
			return { count: (state.count = 0) };
		case 'INCR_BY_PAYLOAD':
			return { count: state.count + action.payload };
		case 'DECR_BY_PAYLOAD':
			return { count: state.count - action.payload };
		default:
			return state;
	}
};
