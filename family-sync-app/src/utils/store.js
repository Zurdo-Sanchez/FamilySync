import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas'
import login from "../reducers/loginReducer";

const defaultMiddlewareConfig = {
 serializableCheck: false
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    login,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(defaultMiddlewareConfig).concat(sagaMiddleware),

});

sagaMiddleware.run(rootSaga)