import {
	LOG_IN,
	LOG_OUT,
	AUTH_FAIL
} from '../actions/admin_actions.js';

const defaultState = {
	connected: false,
	admin: undefined,
	authfail: false,
}

function admin(state = defaultState, action) {
	switch (action.type) {
	case LOG_IN:
		return {
			connected: true,
			admin: action.credentials.username,
			authfail: false,
		}
	case LOG_OUT:
		return {
			connected: false,
			admin: undefined,
			authfail: false,
		}
	case AUTH_FAIL:
		return {
			connected: false,
			admin: undefined,
			authfail: true,
		}
	default:
		return state;
	}
}

export default admin;