//firebase is not just one library, it is a bunch of micro-libraries

import { initializeApp } from "firebase/app";

//importing the authentication library from firebase to setup authentication

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Web app's Firebase configuration
//This config is going to be able to allow us to make firebase actions, CRUD actions
//to save, read, update things to our specific instance of our database
const firebaseConfig = {
  apiKey: "AIzaSyA2a0tfrMmr6CHdhOhjPg7PKkj1U_W9uJw",
  authDomain: "crown-clothing-db-ea29d.firebaseapp.com",
  projectId: "crown-clothing-db-ea29d",
  storageBucket: "crown-clothing-db-ea29d.appspot.com",
  messagingSenderId: "950714621290",
  appId: "1:950714621290:web:6c9930f9b0a42f295dd913",
};

// Initializing Firebase
//The CRUD functionalities are going to happen using this firebase app instance
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) {
    return;
  }
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //if user data does not exist

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }

    //if user data exists
    return userDocRef;
  }
};

//Following function creates the user with given email and password

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  //if email and password is not provided then don't create the user
  if (!email || !password) {
    return;
  }

  //if email and password is provided then create the user and return it
  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 *
 * @param {string} email: receives an argument as email
 * @param {*} password : receives another argument as password
 * @returns sign in the user with provided email and password
 */

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  //if user does not give email and password then this function will not run
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};
