import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddle();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {
    store,
    persistor
};