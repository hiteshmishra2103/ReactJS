import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

import Navigation from "./navigation/navigation.component";
import { Authentication } from "../src/routes/authentication/authentication.component";

import Shop from "./routes/shop/shop.component";

import Checkout from "./routes/checkout/checkout.component";

import { setCurrentUser } from "./store/user/user.action";

import { useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //it will unsubscribe whenever it unmounts
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        //After signin with googlePopup,  create the user: here we are passing the user in createUserDocumentFromAuth
        createUserDocumentFromAuth(user);
      }
      //setting the currentUser to user object if user is signed in, and if user signed out it will store
      //null
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* for any route after /shop/ it will render Shop component */}
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
