import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import rootsaga from "./root-saga";
const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk,logger,sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootsaga)

const persistor = persistStore(store);

export {store, persistor};