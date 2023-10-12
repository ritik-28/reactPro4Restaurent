import classes from "./AddForm.module.css";

const AddForm = () => {
  return (
    <form className={classes.formCls}>
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
