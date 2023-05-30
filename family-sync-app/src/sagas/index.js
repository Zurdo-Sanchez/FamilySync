import { fork, all } from 'redux-saga/effects';
import Login from './loginSagas';

export default function* startForman() {
  yield all([fork(Login)]);
}
