//Navigation bar is the top level template which we want to persist in every route, to achieve this
//we imported it

import { Fragment} from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../assets/crown.svg";

import CartIcon from "../components/cart-icon/cart-icon.component";

import { selectCurrentUser } from "../store/user/user.selector";

import { auth, signOutUser } from "../utils/firebase/firebase.utils";

import CartDropdown from "../components/cart-icon/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../store/cart/cart.selector";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles.jsx";
import { useSelector } from "react-redux";

const Navigation = () => {
  //based on the value of currentUser we will determine whether to show sign-in or sign-out link
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
