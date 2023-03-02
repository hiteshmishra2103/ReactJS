//firebase is not just one library, it is a bunch of micro-libraries

import { initializeApp } from "firebase/app";

//importing the authentication library from firebase to setup authentication

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = async () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
      });
    } catch (error) {
      console.log("error creating the user", error);
    }

    return userDocRef;
  }

  //if user data exists

  

  //return userDocRef
};
