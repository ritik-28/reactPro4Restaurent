import classes from "./AddForm.module.css";
import { useContext } from "react";
import CartContext from "../UI/Store/Cart-Context";

const AddForm = (props) => {
  const { cartCtx, setCartCtx } = useContext(CartContext);
  const addItemToCart = (e) => {
    e.preventDefault();
    setCartCtx({
      ...cartCtx,
      items: [
        ...cartCtx.items,
        { ...props.val, quantity: e.target.quantity.value },
      ],
    });
  };

  return (
    <form className={classes.formCls} onSubmit={addItemToCart}>
      <label htmlFor="quantity" className={classes.labelCls}>
        Amount
      </label>
      <input
        id="quantity"
        type="number"
        min="1"
        max="6"
        step="1"
        defaultValue="1"
        className={classes.inputCls}
      ></input>
      <br />
      <button className={classes.btnCls}>+ Add</button>
    </form>
  );
};

export default AddForm;
