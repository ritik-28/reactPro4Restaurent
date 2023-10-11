import React from "react";
import mealImg from "../meals.jpg";
import "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className="color_h">
        <h1 className="header_h">ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <img src={mealImg} alt="restaurent" className="mealImg" />
    </React.Fragment>
  );
};

export default Header;
