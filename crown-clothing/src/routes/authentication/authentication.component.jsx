//importing the signUpForm
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

//importing the signInForm
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

//importing the styles for authentication component
import { AuthenticationContainer } from "./authentication.styles";

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
