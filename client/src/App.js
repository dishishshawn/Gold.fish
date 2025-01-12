import React from "react";
import Header from "./components/Header";
import IncomeTracker from "./components/IncomeTracker";
import ExpenseTracker from "./components/ExpenseTracker";
import FishTank from "./components/FishTank";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <Header />
      <Quotes />
      <IncomeTracker />
      <ExpenseTracker />
      <FishTank />
    </div>
  );
}

export default App;
