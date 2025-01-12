import React, { useState } from "react";
import Header from "./components/header";
import IncomeTracker from "./components/incometracker";
import ExpenseTracker from "./components/expensetracker";
import FishTank from "./components/fishtank";
import Quotes from "./components/quotes";

function App() {
  // Define state variables
  const [income, setIncome] = useState(0); // State for income
  const [expenses, setExpenses] = useState(0); // State for expenses

  return (
    <div className="App">
      <Header />
      <Quotes />
      <div className="tracker-container">
        <IncomeTracker setIncome={setIncome} />
        <ExpenseTracker setExpenses={setExpenses} />
      </div>
      <FishTank income={income} expenses={expenses}/>
    </div>
  );
}

export default App;
