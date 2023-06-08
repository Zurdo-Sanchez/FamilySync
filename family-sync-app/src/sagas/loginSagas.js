import {
  all,
  put,
  call,
  takeLatest,
} from "redux-saga/effects";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
//functions
import authFunction from "../utils/authFunction";

// Actions
import * as userActions from "../actions/userActions";

//ACTIONTYPES
import * as userActionsType from "../actions/actionsType/userActionsType";

// Selectors

//functions
function* authSagas(payload) {
  let userData = {
    uid: "",
    accessToken: "",
    displayName: "",
    email: "",
    photoURL: "",
  };
  try {
    const res = yield call(authFunction, payload.payload);
    userData.uid = res[0] && res[0].uid;
    userData.accessToken = res[0] && res[0].accessToken;
    userData.displayName = res[0] && res[0].displayName;
    userData.email = res[0] && res[0].email;
    userData.photoURL = res[0] && res[0].photoURL;

    yield all([
      put(userActions.setUserAction(userData)),
      put(userActions.setIsLoggedAction(true)),
    ]);
  } catch {}
}

function* signOutSagas() {
  try {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("SIGN OUT");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    yield all([
      put(userActions.setUserAction([])),
      put(userActions.setIsLoggedAction(false)),
    ]);
  } catch {}
}

// Watchers
function* authSagasWatcher() {
  yield takeLatest(userActionsType.AUTH_ACTION, authSagas);
}
function* signOutWatcher() {
  yield takeLatest(userActionsType.SIGNOUT_ACTION, signOutSagas);
}

//exports

export default function* sagas() {
  yield all([authSagasWatcher(), signOutWatcher()]);
}
