import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
//REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import precariApp from './redux/reducers/_reducers.js';
//Cookies
import { CookiesProvider } from 'react-cookie';

const store = createStore(
	precariApp,
	window.STATE_FROM_SERVER,
	applyMiddleware(logger)
);

ReactDOM.render(
	<CookiesProvider>
		<Provider store={store}>
			<Root />
		</Provider>
	</CookiesProvider>,
	document.getElementById('root')
);