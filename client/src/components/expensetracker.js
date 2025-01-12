// components/expensetracker.js
import React, { useEffect, useState } from 'react';
import './expensetracker.css';

const ExpenseTracker = ({ setExpenses }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Retrieve saved expenses from localStorage on component mount
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(Number(savedExpenses)); // Set the expenses in parent component
      setInputValue(savedExpenses); // Set the input field value
    }
  }, [setExpenses]);

  const handleExpenseChange = (e) => {
    setInputValue(e.target.value); // Update input field value
  };

  const handleSetExpenses = () => {
    const expensesValue = Number(inputValue);
    if (!isNaN(expensesValue)) {
      setExpenses(expensesValue); // Update expenses state in parent component
      localStorage.setItem('expenses', expensesValue); // Save to localStorage
    }
  };

  return (
    <div>
      <label>Expenses: </label>
      <input
        type="number"
        value={inputValue}
        onChange={handleExpenseChange}
        placeholder="Enter expenses"
      />
      <button onClick={handleSetExpenses}>Set Expenses</button>
    </div>
  );
};

export default ExpenseTracker;
