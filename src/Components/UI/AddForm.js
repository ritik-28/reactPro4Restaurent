import classes from "./AddForm.module.css";

const AddForm = () => {
  return (
    <form className={classes.formCls}>
      <label className={classes.labelCls}>Amount</label>
      <input type="number" className={classes.inputCls}></input>
      <br />
      <button className={classes.btnCls}>+Add</button>
    </form>
  );
};

export default AddForm;
