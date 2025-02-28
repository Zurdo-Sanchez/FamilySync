import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8kN2t9AMEUDB4zziTuHH0dMWbzbSyCqc",
  authDomain: "workstation-personal.firebaseapp.com",
  projectId: "workstation-personal",
  storageBucket: "workstation-personal.firebasestorage.app",
  messagingSenderId: "42321063811",
  appId: "1:42321063811:web:2548dd49547618af92d0b6",
  measurementId: "G-W9B63W2W3V",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const fireBaseModule = {
  auth,
  db,
};

export default fireBaseModule;
