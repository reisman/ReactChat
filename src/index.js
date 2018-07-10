import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import chat from './reducers';
import setupSocket from './sockets';
import handleMessage from './sagas';
import username from './utils/namegenerator';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    chat,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
        ),
    ),
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleMessage, { socket, username });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
