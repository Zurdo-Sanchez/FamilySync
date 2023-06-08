import {
  all,
  put,
  select,
  call,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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
  const { email, password, provider } = payload.payload;
  let userData = {
    uid: "",
    accessToken: "",
    displayName: "",
    email: "",
    photoURL: "",
  };
  try {
    authFunction(payload.payload)
      .then((res) => {
        userData.uid = res[0] && res[0].uid;
        userData.accessToken = res[0] && res[0].accessToken;
        userData.email = res[0] && res[0].displayName;
        userData.uid = res[0] && res[0].email;
        userData.photoURL = res[0] && res[0].photoURL;
        debugger
      })
      .catch((err) => {
        console.log(err);
      });

    yield all([
      put(userActions.setUserAction(userData)),
      put(userActions.setIsLoggedAction(true)),
    ]);
    debugger;
  } catch {}
}

function* signOutSagas() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("SIGN OUT");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });

  yield put(userActions.setIsLoggedAction(false));
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
