const defaultState = {
	string: 'Default value',
};

const TO_UPPER_CASE = 'TO_UPPER_CASE';
const REVERSE = 'REVERSE';
const CHANGE = 'CHANGE';

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

//генераторы Action
export const toUpperCaseAction = () => ({
	type: TO_UPPER_CASE,
});
export const reverseAction = () => ({
	type: REVERSE,
});
export const changeAction = payload => ({
	type: CHANGE,
	payload,
});
