const defaultState = {
	users: [
		{ id: 101, firstName: 'Alex', age: 30 },
		{ id: 102, firstName: 'Steven', age: 35 },
		{ id: 103, firstName: 'Neena', age: 43 },
		{ id: 104, firstName: 'John', age: 55 },
	],
};

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
