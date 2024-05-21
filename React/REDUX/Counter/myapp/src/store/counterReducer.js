const defaultState = {
	count: 0,
};

const INCR = 'INCR';
const DECR = 'DECR';
const RESET = 'RESET';
const INCR_BY_PAYLOAD = 'INCR_BY_PAYLOAD';
const DECR_BY_PAYLOAD = 'DECR_BY_PAYLOAD';
const INCR_BY_PROMPT = 'INCR_BY_PROMPT';
const DECR_BY_PROMPT = 'DECR_BY_PROMPT';

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
		case 'INCR_BY_PROMPT':
			return { count: state.count + action.payload };
		case 'DECR_BY_PROMPT':
			return { count: state.count - action.payload };

		default:
			return state;
	}
};

export const incrAction = () => ({
	type: INCR,
});
export const decrAction = () => ({
	type: DECR,
});
export const resetAction = () => ({
	type: RESET,
});
export const incrByPayloadAction = payload => ({
	type: INCR_BY_PAYLOAD,
	payload,
});
export const decrByPayloadAction = payload => ({
	type: DECR_BY_PAYLOAD,
	payload,
});
export const incrByPromptAction = payload => ({
	type: INCR_BY_PROMPT,
	payload,
});
export const decrByPromptAction = payload => ({
	type: DECR_BY_PROMPT,
	payload,
});
