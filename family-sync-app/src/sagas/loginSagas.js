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
    displayName: "",
    email: "",
    photoURL: "",
  };
  try {
    if (provider === "signup") {
      //create new user
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const response = userCredential.user;

          console.log("RESPONSE", response);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const response =
            "Error code: " + errorCode + "Error Message: " + errorMessage;
          console.log("RESPONSE", response);
        });
    } else {
      //login with diferent payload
      switch (provider) {
        case "email":
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              userData.uid =
                userCredential &&
                userCredential.user &&
                userCredential.user.uid;
              userData.user =
                userCredential &&
                userCredential.user &&
                userCredential.user.user
                  ? userCredential.user.displayName
                  : null;
              userData.email =
                userCredential &&
                userCredential.user &&
                userCredential.user.email;

              userData.photoURL =
                userCredential &&
                userCredential.user &&
                userCredential.user.photoURL
                  ? userCredential.user.photoURL
                  : null;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const response =
                "Error code: " + errorCode + "Error Message: " + errorMessage;
              console.log("RESPONSE LOGIN", response);
            });
          break;
        case "google":
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential =
                GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // IdP data available using getAdditionalUserInfo(result)
              // ...
              console.log("RESULT", result);
            })
            .catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
              console.log("ERROR LOGIN GOOGLE");
              console.log("ERROR CODE", errorCode);
              console.log("ERROR MESSAGE", errorMessage);
              console.log("ERROR EMAIL", email);
              console.log("ERROR CREDENTIAL", credential);
            });
          break;
      }
    }
    yield all([
      put(userActions.setUserAction(userData)),
      put(userActions.setIsLoggedAction(true))
    ]);
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
