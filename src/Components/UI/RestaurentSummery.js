import React from "react";
import classes from "./RestaurentSummery.module.css";

const RestaurentSummery = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food, Delivered to you</h1>
      <br />
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <br />
      <p>
        All our meals are cooked with high quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default RestaurentSummery;
