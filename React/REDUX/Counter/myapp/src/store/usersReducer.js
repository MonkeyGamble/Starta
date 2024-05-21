const defaultState = {
	users: [
		{ id: 101, firstName: 'Alex', age: 30 },
		{ id: 102, firstName: 'Steven', age: 35 },
		{ id: 103, firstName: 'Neena', age: 43 },
		{ id: 104, firstName: 'John', age: 55 },
	],
};

const DELETE_USER = 'DELETE_USER'
const AGE_FILTER = 'AGE_FILTER'

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'DELETE_USER':
			return {users: state.users.slice(0, -1)}
		case 'AGE_FILTER':
			return {users: state.users.filter(el=>el.age>35)}
		default:
			return state;
	}
};

export const deleteUserAction = ()=> ({
	type: DELETE_USER
})
export const ageFilterAction = ()=> ({
	type: AGE_FILTER

})