//This file contains the generalised button component

/*
There are three types of buttons used in our site

1) default button

2) inverted button(i.e: the styling of this button is converse to default button)

3) google sign-in

*/

//importing the styling for button component

import "./button.styles.scss";

//below is the object for types of button to generalise the button component
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

//Below button component will have the props like children, buttonType which will allow us to apply
//appropriate styling to it

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
