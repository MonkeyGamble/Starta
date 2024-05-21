const defaultState = {
	string: 'Default value',
};

export const stringReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'TO_UPPER_CASE':
			return { string: state.string.toUpperCase() };
		case 'REVERSE':
			return { string: state.string.split('').reverse().join('') };
		case 'CHANGE':
			return { string: state.string.slice(0, action.payload) };
		default:
			return state;
	}
};
