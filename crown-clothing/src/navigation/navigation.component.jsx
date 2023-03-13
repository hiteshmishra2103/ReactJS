//Navigation bar is the top level template which we want to persist in every route, to achieve this
//we imported it

import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../assets/crown.svg";

import { useSelector } from "react-redux";

import CartIcon from "../components/cart-icon/cart-icon.component";

import { CartContext } from "../contexts/cart.context";

import { selectCurrentUser } from "../store/user/user.selector";

import { auth, signOutUser } from "../utils/firebase/firebase.utils";

import CartDropdown from "../components/cart-icon/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles.jsx";

const Navigation = () => {
  //based on the value of currentUser we will determine whether to show sign-in or sign-out link
  const currentUser = useSelector((state) => state.user.currentUser);

  const { isCartOpen } = useContext(CartContext);

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
