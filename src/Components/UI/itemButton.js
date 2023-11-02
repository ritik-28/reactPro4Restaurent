import classes from "./CardContent.module.css";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";

const ItemButton = (props) => {
  const { cartCtx, setCartCtx } = useContext(CartContext);
  const minus = () => {
    const newList = cartCtx.items.filter((item) => item.id !== props.delKey);
    setCartCtx({
      ...cartCtx,
      items: newList,
    });
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
