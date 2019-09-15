import {
	ADD_TOKEN,
	REMOVE_TOKEN,
} from '../actions/token_actions.js';

function token(state = null, action) {
	switch (action.type) {
	case ADD_TOKEN:
		return action.token;
	case REMOVE_TOKEN:
		return null;
	default:
		return state;
	}
}

export default token;