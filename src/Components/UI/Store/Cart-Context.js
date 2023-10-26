import React from "react";

const addItemToCartHandler = (newItem) => {};
const removeItemFromCartHandler = (val) => {};
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler,
});

export default CartContext;
