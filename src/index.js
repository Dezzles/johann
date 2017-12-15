import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from './reducers/root';
import { initApp } from './actions/creators';
import App from './containers/App.js';

const store = createStore(rootReducer);

const render = () => {
	ReactDOM.render(
		(<HashRouter>
			<App store={store} />
		</HashRouter>),
		document.getElementById('root')
	);
};

store.subscribe(render);

initApp(store.dispatch);
