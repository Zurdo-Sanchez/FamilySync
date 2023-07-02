import { all, put, call, takeLatest, select } from "redux-saga/effects";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

import fireBaseModule from "../utils/firebase";
//functions

// Actions
import * as accountantActions from "../actions/accountantActions";
import * as notificationActions from "../actions/notificationActions";

//ACTIONTYPES
import * as acountantActionsType from "../actions/actionsType/accountantActionsType";

// Selectors
import { getCategory, loading } from "../selectors/accountantSelector";
import { getUserSelector } from "../selectors/loginSelector";
//functions
function* getDBCategoriesSagas() {
  yield put(accountantActions.setLoading(true));
  try {
    const categories = [];
    const user = yield select(getUserSelector);
    const collectionRef = collection(fireBaseModule.db, "categories");
    const querySnapshot = yield call(
      getDocs,
      query(collectionRef, where("userId", "==", user.uid))
    );

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));
    data.map((data) => categories.push(data));

    yield all([
      put(accountantActions.setCategory(categories)),
      put(accountantActions.setLoading(false)),
    ]);
  } catch (error) {
    // Manejar el error aquí
    yield yield all([
      put(
        notificationActions.setNotificationMessage({
          message: `Error en getDBCategoriesSagas`,
          type: "error",
        })
      ),
      put(accountantActions.setLoading(false)),
    ]);

    console.log("Error en getDBCategoriesSagas:", error);
  }
}

function* addCategorySagas(payload) {
  try {
    yield put(accountantActions.setLoading(true));

    const newCategory = payload.value;
    const categories = yield select(getCategory);
    const user = yield select(getUserSelector);
    const maxLong = 10;
    const minLong = 3;

    let checkIfTheCategoryNoExists = false;
    let validateInput = false;

    if (!newCategory) {
      yield all([
        put(
          notificationActions.setNotificationMessage({
            message: `La categoria no puede estar vacia`,
            type: "error",
          })
        ),
        put(accountantActions.setLoading(false)),
      ]);
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
        yield all([
          put(
            notificationActions.setNotificationMessage({
              message: `La categoria no puede contener caracteres especiales`,
              type: "error",
            })
          ),
          put(accountantActions.setLoading(false)),
        ]);

        validateInput = false;
      } else if (longMinAccepted) {
        yield all([
          put(
            notificationActions.setNotificationMessage({
              message: `El input tiene menos de ${minLong} dígitos`,
              type: "error",
            })
          ),
          put(accountantActions.setLoading(false)),
        ]);
        validateInput = false;
      } else if (longMaxAccepted) {
        yield all([
          put(
            notificationActions.setNotificationMessage({
              message: `El input no debe tener más de ${maxLong} dígitos`,
              type: "error",
            })
          ),
          put(accountantActions.setLoading(false)),
        ]);
        validateInput = false;
      } else {
        validateInput = true;
      }
    }
    if (categories.includes(newCategory)) {
      yield all([
        put(
          notificationActions.setNotificationMessage({
            message: `La categoria ${newCategory} ya existe`,
            type: "error",
          })
        ),
        put(accountantActions.setLoading(false)),
      ]);
      checkIfTheCategoryNoExists = false;
    } else {
      checkIfTheCategoryNoExists = true;
    }

    if (validateInput && checkIfTheCategoryNoExists) {
      const data = {
        id: "",
        userId: user.uid,
        name: newCategory,
      };
      const collectionRef = collection(fireBaseModule.db, "categories");
      const querySnapshot = yield call(addDoc, collectionRef, data); // Agrega el dato a la colección

      delete data.userId;
      data.id = querySnapshot.id;
      categories.push(data);

      yield all([
        put(accountantActions.setCategory(categories)),
        put(
          notificationActions.setNotificationMessage({
            message: `Categoria ${newCategory} agregada`,
            type: "success",
          })
        ),
        put(accountantActions.setLoading(false)),
      ]);
    }
  } catch {
    yield all([
      put(
        notificationActions.setNotificationMessage({
          message: `Error en addCategorySagas `,
          type: "success",
        })
      ),
      put(accountantActions.setLoading(false)),
    ]);
  }
}
function* deleteCategorySagas(payload) {
  try {
    yield put(accountantActions.setLoading(true));
    const idCategory = payload.value;
    const categories = yield select(getCategory);
    const categoryRef = doc(
      collection(fireBaseModule.db, "categories"),
      idCategory
    );
    // Eliminar el elemento con el ID idCategory del arreglo categories
    const updatedCategories = categories.filter(
      (category) => category.id !== idCategory
    );

    // Actualizar el estado de las categorías con el nuevo arreglo
    yield put(accountantActions.setCategory(updatedCategories));
    yield all([
      call(deleteDoc, categoryRef),

      put(
        notificationActions.setNotificationMessage({
          message: `Categoria ${idCategory} borrada`,
          type: "success",
        })
      ),
      put(accountantActions.setLoading(false)),
    ]);
  } catch (error) {
    yield all([
      put(
        notificationActions.setNotificationMessage({
          message: `Error en Sagas deleteCategorySagas: ${error.message}`,
          type: "error",
        })
      ),
      put(accountantActions.setLoading(false)),
    ]);
  }
}

// Watchers
function* getDBCategorySagasWatcher() {
  yield takeLatest(
    acountantActionsType.GET_DB_CATEGORY_ACTION,
    getDBCategoriesSagas
  );
}

function* addCategorySagasWatcher() {
  yield takeLatest(acountantActionsType.ADD_CATEGORY_ACTION, addCategorySagas);
}

function* deleteCategorySagasWatcher() {
  yield takeLatest(
    acountantActionsType.DELETE_CATEGORY_ACTION,
    deleteCategorySagas
  );
}

//exports

export default function* sagas() {
  yield all([
    addCategorySagasWatcher(),
    getDBCategorySagasWatcher(),
    deleteCategorySagasWatcher(),
  ]);
}
