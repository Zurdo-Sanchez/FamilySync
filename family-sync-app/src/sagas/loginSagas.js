import {
  all,
  put,
  select,
  call,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

// Actions
import * as userActions from "../actions/actionsType/userActionsType";

// Selectors

//functions
function* pruebaSagas() {
  console.log("SALE SAGASSSS");
}

// Watchers
function* pruebasSagasWatcher() {
  yield takeLatest(userActions.PRUEBA, pruebaSagas);
}

//exports

export default function* sagas() {
  yield all([pruebasSagasWatcher()]);
}
