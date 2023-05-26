import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFaaNm3f-spoibjcKjVxvKiz3P_4SmdHE",
  authDomain: "family-sync-app.firebaseapp.com",
  projectId: "family-sync-app",
  storageBucket: "family-sync-app.appspot.com",
  messagingSenderId: "56865158288",
  appId: "1:56865158288:web:8ec75809c0c1d006f89415",
  measurementId: "G-ZRPMW94FCY"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
