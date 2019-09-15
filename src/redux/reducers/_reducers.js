import { combineReducers } from 'redux';
import admin from './admin_reducer.js';
import token from './token_reducer.js';

const precariApp = combineReducers({
    admin,
    token,
});

export default precariApp;