import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdOWx0Oq_N2mLojo1qqiBO6K87WnE7YnU",
  authDomain: "familysync-app.firebaseapp.com",
  projectId: "familysync-app",
  storageBucket: "familysync-app.appspot.com",
  messagingSenderId: "728277839826",
  appId: "1:728277839826:web:240641395fc245a815a20b",
  measurementId: "G-7MNM2P1X59",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const fireBaseModule = {
  auth,
  db,
};

export default fireBaseModule;
