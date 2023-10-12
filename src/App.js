import React from "react";
import Header from "./Components/UI/Header";
import RestaurentSummery from "./Components/UI/RestaurentSummery";
import AvailableMeals from "./Components/UI/AvailableMeals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <RestaurentSummery />
        <AvailableMeals />
      </main>
    </React.Fragment>
  );
}

export default App;
