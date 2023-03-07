//this file contains everything related to users, authentication and store those users

import { createContext, useEffect, useState } from "react";

//creating the context for storing the users

//creating the context and passing the default values to it

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    //it will unsubscribe whenever it unmounts
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        //After signin with googlePopup,  create the user: here we are passing the user in createUserDocumentFromAuth
        createUserDocumentFromAuth(user);
      }
      //setting the currentUser to user object if user is signed in, and if user signed out it will store
      //null
      setCurrentUser(user);
    });   
    return unsubscribe;
  }, []);

  //UserContext.Provider is a component that will wrap around any other component that need access
  //to the value inside of UserContext
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
