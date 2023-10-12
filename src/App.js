import React from "react";
import Header from "./Components/UI/Header";
import RestaurentSummery from "./Components/UI/RestaurentSummery";
import AvailableMeals from "./Components/UI/AvailableMeals";
import CartContent from "./Components/UI/CartContent";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <RestaurentSummery />
        <AvailableMeals />
      </main>
      <CartContent />
    </React.Fragment>
  );
}

export default App;
