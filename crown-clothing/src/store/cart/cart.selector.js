import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

//following function is responsible for the total price of cart items
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log(cartItems);
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
