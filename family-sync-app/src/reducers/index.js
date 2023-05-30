import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './loginReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    login,
  });
