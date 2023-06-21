import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './loginReducer';
import accountant from './accountantReducer'
import notifications from './notificationReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    login,
    accountant
  });
