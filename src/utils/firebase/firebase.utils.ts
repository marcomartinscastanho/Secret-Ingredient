import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  setDoc,
} from "firebase/firestore";
import { Ingredient } from "../../store/ingredients/ingredient.types";
import { Recipe } from "../../store/recipes/recipe.types";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

/**
 * Auth User
 */
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      // callback
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      // error callback
      reject
    );
  });
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

/**
 * User Documents
 */
export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
      return (await getDoc(userDocRef)) as QueryDocumentSnapshot<UserData>;
    } catch (error) {
      console.error("error creating the user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

/**
 * Recipes Documents
 */
export const getRecipes = async (): Promise<Recipe[]> => {
  const collectionRef = collection(db, "recipes");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Recipe);
};

/**
 * Ingredients Documents
 */
export const getIngredients = async (): Promise<Ingredient[]> => {
  const collectionRef = collection(db, "ingredients");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Ingredient);
};
