import { all, put, call, takeLatest, select } from "redux-saga/effects";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

import fireBaseModule from "../utils/firebase";
//functions

// Actions
import * as accountantActions from "../actions/accountantActions";
import * as notificationActions from "../actions/notificationActions";

//ACTIONTYPES
import * as acountantActionsType from "../actions/actionsType/accountantActionsType";

// Selectors
import { getCategory } from "../selectors/accountantSelector";
import { getUserSelector } from "../selectors/loginSelector";
//functions
function* getDBCategoriesSagas() {
  try {
    const categories = [];
    const user = yield select(getUserSelector);
    const collectionRef = collection(fireBaseModule.db, "categories");
    const querySnapshot = yield call(
      getDocs,
      query(collectionRef, where("userId", "==", user.uid))
    );
    const data = querySnapshot.docs.map((doc) => doc.data());

    data.map((data) => categories.push(data.name));

    yield put(accountantActions.setCategory(categories));
  } catch (error) {
    // Manejar el error aquí
    yield put(
      notificationActions.setNotificationMessage({
        message: `Error en getDBCategoriesSagas`,
        type: "error",
      })
    );

    console.log("Error en getDBCategoriesSagas:", error);
  }
}

function* addCategory(payload) {
  try {
    const newCategory = payload.value;
    const categories = yield select(getCategory);
    const user = yield select(getUserSelector);

    const data = {
      userId: user.uid,
      name: newCategory,
    };
    if (newCategory) {
      const collectionRef = collection(fireBaseModule.db, "categories");
      yield call(addDoc, collectionRef, data); // Agrega el dato a la colección
      categories.push(newCategory);
    }
    yield all([
      put(accountantActions.setCategory(categories)),
      put(
        notificationActions.setNotificationMessage({
          message: `Categoria ${newCategory} agregada`,
          type: "success",
        })
      ),
    ]);
  } catch {}
}

// Watchers
function* getDBCategorySagasWatcher() {
  yield takeLatest(
    acountantActionsType.GET_DB_CATEGORY_ACTION,
    getDBCategoriesSagas
  );
}

function* addCategorySagasWatcher() {
  yield takeLatest(acountantActionsType.ADD_CATEGORY_ACTION, addCategory);
}

//exports

export default function* sagas() {
  yield all([addCategorySagasWatcher(), getDBCategorySagasWatcher()]);
}
