//this file contains everything related to users, authentication and store those users

import { createContext, useEffect, useReducer } from "react";

import createAction from "../utils/reducer/reducer.utils";

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

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const UserReducer = (state, action) => {

  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case "increment":
      return {
        value: state.value + 1,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }

  return {
    currentUser: payload,
  };
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const { currentUser } = state;
  

  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

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

/*
const userReducer=(state, action)=>{
  return {
    currentUser:null
  }
}
*/
