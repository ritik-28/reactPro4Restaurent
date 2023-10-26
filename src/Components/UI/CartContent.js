import classes from "./CardContent.module.css";
import Modal from "./Model";
import CartContext from "./Store/Cart-Context";
import { useContext } from "react";

const CartContent = (props) => {
  const { cartCtx } = useContext(CartContext);
  let price = 0;
  cartCtx.items.forEach((el) => (price = price + el.price));
  return (
    <Modal className={classes.cardContent} hideCart={props.hideCart}>
      {cartCtx.items.map((item) => (
        <p>
          {item.name}, {item.quantity}, {item.price}
        </p>
      ))}
      <div className={classes.divam}>
        <span className={classes.txtBold}>Total Amount</span>
        <span className={classes.txtBold}>{price}</span>
      </div>
      <div className={classes.btnGroup}>
        <button className={classes.btnorder}>Order</button>
        <button className={classes.btnclose} onClick={props.hideCart}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CartContent;
