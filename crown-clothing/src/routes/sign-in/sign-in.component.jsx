import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { async } from "@firebase/util";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     //This code will run when the signIn component mounts, when the user come back after selecting
  //     //the account to log in
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   };

  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    //After signin with googlePopup create the user: here we are passing the user in createUserDocumentFromAuth
    //
    const userDocRef = createUserDocumentFromAuth(user);
  };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   // const userDocRef = createUserDocumentFromAuth(user);
  //   console.log({ user });
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div> 
  );
};

export default SignIn;
