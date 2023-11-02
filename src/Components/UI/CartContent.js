import classes from "./CardContent.module.css";
import Modal from "./Model";
import CartContext from "./Store/Cart-Context";
import ItemButton from "./itemButton";
import { useContext } from "react";

const CartContent = (props) => {
  const { cartCtx } = useContext(CartContext);
  let price = 0;
  cartCtx.items.forEach((el) => (price = price + el.price * el.quantity));
  return (
    <Modal className={classes.cardContent} hideCart={props.hideCart}>
      {cartCtx.items.map((item) => (
        <div className={classes.oneItem} key={item.id}>
          <div className={classes.leftItem}>
            <p className={classes.cartPara}>{item.name}</p>
            <span className={classes.money}>${item.price}</span>
            <h1 className={classes.quantity}>x{item.quantity}</h1>
          </div>
          <ItemButton delKey={item.id} />
        </div>
      ))}
      <div className={classes.divam}>
        <span className={classes.txtBold}>Total Amount</span>
        <span className={classes.txtBold}>{price.toFixed(2)}</span>
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
