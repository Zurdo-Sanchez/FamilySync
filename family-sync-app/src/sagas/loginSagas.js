import {
  all,
  put,
  select,
  call,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

// Actions
import { prueba } from "../actions/userActions";

// Selectors

//functions
function* pruebaSagas() {
  console.log("SALE SAGASSSS");
}

// Watchers
function* pruebasSagasWatcher() {
  yield takeLatest(userActionTypes.PRUEBA, pruebaSagas);
}

//exports

export default function* sagas() {
  yield all([pruebasSagasWatcher()]);
}
