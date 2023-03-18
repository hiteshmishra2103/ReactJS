import { async } from "@firebase/util";
import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  // createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

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
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
