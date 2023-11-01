import classes from "./CardContent.module.css";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";

const ItemButton = (props) => {
  const { cartCtx, setCartCtx } = useContext(CartContext);
  console.log(cartCtx);
  console.log(props);
  const minus = (e) => {
    console.log(e);
  };
  return (
    <div className={classes.rightItem}>
      <button className={classes.btnplus}>+</button>
      <button className={classes.btnmin} onClick={minus}>
        -
      </button>
    </div>
  );
};

export default ItemButton;
