import { auth } from "../firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signOut,
} from "firebase/auth";
export const signupWithEmailAndPassword = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const signinWithEmailAndPassword = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};
