import React, { useState } from "react";

const ExpenseTracker = ({ setExpenses }) => {
  const [expense, setExpense] = useState("");

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
    setExpenses(e.target.value); // Pass expense value to parent component
  };

  return (
    <div>
      <h2>Track Your Expenses</h2>
      <input
        type="number"
        placeholder="Enter your expenses"
        value={expense}
        onChange={handleExpenseChange}
      />
    </div>
  );
};

export default ExpenseTracker;
