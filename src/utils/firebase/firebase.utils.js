import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdgtS1HYzoP7jcplx3-RBH9W51stC_YEM",
  authDomain: "secret-ingredient-app.firebaseapp.com",
  databaseURL: "https://secret-ingredient-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "secret-ingredient-app",
  storageBucket: "secret-ingredient-app.appspot.com",
  messagingSenderId: "59679461860",
  appId: "1:59679461860:web:309582a922c70f41abb7f1",
  measurementId: "G-4BEM8EF8PQ",
};

/**
 * Initialize Firebase
 */
const firebaseApp = initializeApp(firebaseConfig);

/**
 * Auth
 */
export const auth = getAuth();

/**
 * Firestore DB
 */
export const db = getFirestore();

/**
 * Configure google auth
 */
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/**
 * User Documents
 */
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("error creating the user", error.message);
    }
  }

  return userDocRef;
};
