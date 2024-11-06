// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";

import { getAuth } from "firebase/auth"; // Import Auth module
import { getFirestore } from "firebase/firestore"; // Import Firestore module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Mg1JSXcIegkmfIdDvmUu0V3poGQIoXI",
  authDomain: "inventory-managment-e10a5.firebaseapp.com",
  projectId: "inventory-managment-e10a5",
  storageBucket: "inventory-managment-e10a5.appspot.com",
  messagingSenderId: "577938359366",
  appId: "1:577938359366:web:d42103ae716a120a77f647",
  measurementId: "G-F0YTSVM75L",
};

// Initialize Firebase
if (!firebase.apps.length) {
  var app = firebase.initializeApp(firebaseConfig);
}

const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
