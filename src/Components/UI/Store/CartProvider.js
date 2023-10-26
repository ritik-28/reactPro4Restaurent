import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [cartCtx, setCartCtx] = useState(CartContext._currentValue);
  return (
    <CartContext.Provider value={{ cartCtx: cartCtx, setCartCtx: setCartCtx }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
