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
    const maxLong = 10;
    const minLong = 3;

    let checkIfTheCategoryNoExists = false;
    let validateInput = false;

    if (!newCategory) {
      yield put(
        notificationActions.setNotificationMessage({
          message: `La categoria no puede estar vacia`,
          type: "error",
        })
      );
      validateInput = false;
    } else {
      // Verificar si el input tiene caracteres especiales
      const specialCharsRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
      const hasSpecialChars = specialCharsRegex.test(newCategory);
      // Verificar si el input tiene la cantidad de digitos aceptada
      const longMaxAccepted = newCategory && newCategory.length > maxLong;
      const longMinAccepted = newCategory && newCategory.length < minLong;
      // Validar el resultado de ambas verificaciones
      if (hasSpecialChars) {
        yield put(
          notificationActions.setNotificationMessage({
            message: `La categoria no puede contener caracteres especiales`,
            type: "error",
          })
        );
        validateInput = false;
      } else if (longMinAccepted) {
        yield put(
          notificationActions.setNotificationMessage({
            message: `El input tiene menos de ${minLong} dígitos`,
            type: "error",
          })
        );
        validateInput = false;
      } else if (longMaxAccepted) {
        yield put(
          notificationActions.setNotificationMessage({
            message: `El input no debe tener más de ${maxLong} dígitos`,
            type: "error",
          })
        );
        validateInput = false;
      } else {
        validateInput = true;
      }
    }
    if (categories.includes(newCategory)) {
      yield put(
        notificationActions.setNotificationMessage({
          message: `La categoria ${newCategory} ya existe`,
          type: "error",
        })
      );
      checkIfTheCategoryNoExists = false;
    } else {
      checkIfTheCategoryNoExists = true;
    }

    if (validateInput && checkIfTheCategoryNoExists) {
      const data = {
        userId: user.uid,
        name: newCategory,
      };
      const collectionRef = collection(fireBaseModule.db, "categories");
      yield call(addDoc, collectionRef, data); // Agrega el dato a la colección
      categories.push(newCategory);

      yield all([
        put(accountantActions.setCategory(categories)),
        put(
          notificationActions.setNotificationMessage({
            message: `Categoria ${newCategory} agregada`,
            type: "success",
          })
        ),
      ]);
    }
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
