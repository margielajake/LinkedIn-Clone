import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMiSzfld0EBjIaDaroZYNeP4BUn00nDm8",
  authDomain: "linkedin-clone-93d14.firebaseapp.com",
  projectId: "linkedin-clone-93d14",
  storageBucket: "linkedin-clone-93d14.appspot.com",
  messagingSenderId: "877137824723",
  appId: "1:877137824723:web:ba3b7ddd01cde3745e3d26",
  measurementId: "G-NB11JFVRMK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { db, auth };
