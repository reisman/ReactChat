import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import App from './App';
import NewUser from './containers/NewUser';
import chat from './reducers';
import setupSocket from './sockets';
import handleMessage from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(chat),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
        ),
    ),
);

const socket = setupSocket(store.dispatch);
const usernameAccess = () => store.getState().Users.username;

sagaMiddleware.run(handleMessage, { socket, usernameAccess });

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/chat' component={App} />
                <Route path='/' component={NewUser} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
