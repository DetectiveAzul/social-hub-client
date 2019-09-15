//CONSTANTS
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTH_FAIL = 'AUTH_FAIL';

//ACTIONS

export function logIn(credentials) {
	return { type: LOG_IN, credentials: credentials };
}

export function logOut() {
    return { type: LOG_OUT };
}

export function authFail() {
    return { type: AUTH_FAIL };
}

