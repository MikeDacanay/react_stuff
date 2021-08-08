import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { roleReducer } from './store/reducers/role';
import { dogReducer } from './store/reducers/dog';

import { watchRootSagas } from './store/sagas';

const rootReducer = combineReducers({
    roleReducer:  roleReducer,
    dogReducer: dogReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWares = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleWares)),
)

sagaMiddleWares.run(watchRootSagas);

ReactDOM.render(
    <Provider store={store}>    
        <App/>
    </Provider>
, document.getElementById('root'));