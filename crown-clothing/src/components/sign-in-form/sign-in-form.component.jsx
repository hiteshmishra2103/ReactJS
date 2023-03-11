import { async } from "@firebase/util";
import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import {
  // createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

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
    //getting the user object from googlePoput when it selects a account or null if nothing is selected
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //signin with email and password
      //we get appropriate user auth as a response whenever user sign in successfully
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

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
            buttonType={BUTTON_TYPE_CLASSES.google}
            children="Google Sign In"
            type="button"
          />
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
