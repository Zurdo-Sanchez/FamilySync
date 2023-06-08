import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "./firebase";
import { authAction } from "../actions/userActions";

const authFunction = async (service) => {
  const email = service && service.email ? service.email : null;
  const password = service && service.password ? service.password : null;
  const data = [];
  console.log("SERVICE", service);

  if (service && service.provider === "signup") {
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
    //login with diferent service
    switch (service.provider) {
      case "email":
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const response = userCredential.user;
            console.log("RESPONSE LOGIN", response);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const response =
              "Error code: " + errorCode + "Error Message: " + errorMessage;
            console.log("RESPONSE LOGIN", response);
          });

      case "google":
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            data.push(result.user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
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
          });
        break;
    }
  }
  debugger
  return data;
};

export default authFunction;
