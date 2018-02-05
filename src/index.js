import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import './App.css';
import App from './App';
import dotenv from 'dotenv';

// registerServiceWorker is for offline support
//import registerServiceWorker from './registerServiceWorker';

dotenv.config();

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
