import classes from "./CardContent.module.css";
import Modal from "./Model";

const CartContent = () => {
  return (
    <Modal className={classes.cardContent}>
      <p>Sushi</p>
      <div className={classes.divam}>
        <span>Total Amount</span>
        <span>22.62</span>
      </div>
      <div className={classes.btnGroup}>
        <button className={classes.btnorder}>Order</button>
        <button className={classes.btnclose}>Close</button>
      </div>
    </Modal>
  );
};

export default CartContent;
