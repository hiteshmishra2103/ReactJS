//Navigation bar is the top level template which we want to persist in every route, to achieve this
//we imported it

import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../assets/crown.svg";

import CartIcon from "../components/cart-icon/cart-icon.component";

import { UserContext } from "../contexts/user.context";

import { CartContext } from "../contexts/cart.context";

import { auth, signOutUser } from "../utils/firebase/firebase.utils";

import CartDropdown from "../components/cart-icon/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

const Navigation = () => {
  //based on the value of currentUser we will determine whether to show sign-in or sign-out link
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
