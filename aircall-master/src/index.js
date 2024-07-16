import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './css/body.css';
import './css/app.css';
import './css/header.css';
import './css/nav.css';
import './css/activity.css';

import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
