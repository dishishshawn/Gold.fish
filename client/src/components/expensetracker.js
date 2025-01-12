// components/expensetracker.js
import React from 'react';

const ExpenseTracker = ({ setExpenses }) => {
  const handleExpenseChange = (e) => {
    setExpenses(Number(e.target.value)); // Update expenses state
  };

  return (
    <div>
      <label>Expenses: </label>
      <input
        type="number"
        onChange={handleExpenseChange}
        placeholder="Enter expenses"
      />
    </div>
  );
};

export default ExpenseTracker;
