import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMiSzfld0EBjIaDaroZYNeP4BUn00nDm8",
  authDomain: "linkedin-clone-93d14.firebaseapp.com",
  projectId: "linkedin-clone-93d14",
  storageBucket: "linkedin-clone-93d14.appspot.com",
  messagingSenderId: "877137824723",
  appId: "1:877137824723:web:ba3b7ddd01cde3745e3d26",
  measurementId: "G-NB11JFVRMK",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

const analytics = getAnalytics(app);

const colRef = collection(db, "posts");

export { db, colRef, auth };
