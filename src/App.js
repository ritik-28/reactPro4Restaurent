import React, { useState } from "react";
import Header from "./Components/UI/Header";
import RestaurentSummery from "./Components/UI/RestaurentSummery";
import AvailableMeals from "./Components/UI/AvailableMeals";
import CartContent from "./Components/UI/CartContent";

function App() {
  const [isCartShown, setCartIsShown] = useState(false);

  const cartShowHnadler = () => {
    setCartIsShown(true);
  };

  const cartHideHandler = () => {
    setCartIsShown(false);
  };
  return (
    <React.Fragment>
      <Header onShowCart={cartShowHnadler} />
      <main>
        <RestaurentSummery />
        <AvailableMeals />
      </main>
      {isCartShown && <CartContent hideCart={cartHideHandler} />}
    </React.Fragment>
  );
}

export default App;
