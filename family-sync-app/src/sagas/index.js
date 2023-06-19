import { fork, all } from "redux-saga/effects";
import Login from "./loginSagas";
import Accountant from "./accountantSagas";

export default function* startForman() {
  yield all([fork(Login), fork(Accountant)]);
}
