import React from "react";
import mealImg from "../meals.jpg";
import "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="color_h">
        <h1 className="header_h">YourMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <img src={mealImg} alt="restaurent" className="mealImg" />
    </React.Fragment>
  );
};

export default Header;
