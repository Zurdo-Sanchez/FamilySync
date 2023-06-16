import { all, put, call, takeLatest } from "redux-saga/effects";
import { signOut } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";

import fireBaseModule from "../utils/firebase";
//functions

// Actions
import * as dataAccountantActions from "../actions/dataAccountantActions";

//ACTIONTYPES
import * as dataAcountantActionsType from "../actions/actionsType/dataAccountantActionsType";

// Selectors

//functions
function* addCategory(payload) {
  try{
    console.log(addCategory);
  }
   catch {}
}

// Watchers
function* addCategorySagasWatcher() {
  yield takeLatest(dataAcountantActionsType.ADD_CATEGORY_ACTION, addCategory);
}

//exports

export default function* sagas() {
  yield all([addCategorySagasWatcher()]);
}
