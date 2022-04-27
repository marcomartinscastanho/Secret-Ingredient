import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

// configure google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
