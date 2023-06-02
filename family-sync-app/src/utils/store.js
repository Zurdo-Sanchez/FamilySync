import { createStore, applyMiddleware, compose } from 'redux';
import localforage from 'localforage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import immutableTransform from 'redux-persist-transform-immutable';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas'
import rootReducer from "../reducers/";


const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: localforage,
  blacklist: ['notificationHandler']
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);