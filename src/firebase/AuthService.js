import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
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

export const googleAuth = {
  googleSignIn: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date(),
        });
        return { user, isNewUser: true };
      } else {
        return { user, isNewUser: false };
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  },
};
