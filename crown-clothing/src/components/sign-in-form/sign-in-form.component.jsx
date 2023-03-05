import { async } from "@firebase/util";
import { useState } from "react";

import FormInput from "../form-input/form-input.component";

//importing the button component
import "../button/button.component";

import {
  // createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //method for resetting the form fields(clearing the form fields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //method for signing with google
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    //After signin with googlePopup create the user: here we are passing the user in createUserDocumentFromAuth
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //signin with email and password
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        //if the password is wrong then show the error message
        case "auth/wrong-password":
          alert("incorrect credentials, please try again!");
          break;
          //If the user is not found with email, then 
        case "auth / user - not - found":
          alert("User not found, create your account first!");
          break;

        default:
          console.log(error);
      }
      console.error("error😔");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    //updating the value of appropriate input fields
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <div className="buttons-container">
          <Button children="Sign In" type="Submit" />
          <Button
            onClick={signInWithGoogle}
            buttonType="google"
            children="Google Sign In"
            type="button"
          />
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
