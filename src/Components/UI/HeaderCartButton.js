import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";

const CartButton = (props) => {
  const { cartCtx } = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.length;
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
