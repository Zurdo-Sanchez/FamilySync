import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './loginReducer';
import accountant from './accountantReducer'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    login,
    accountant
  });
