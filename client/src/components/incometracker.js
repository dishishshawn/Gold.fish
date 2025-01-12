// components/incometracker.js
import React, { useEffect, useState } from 'react';
import './incometracker.css';

const IncomeTracker = ({ setIncome }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Retrieve saved income from localStorage on component mount
    const savedIncome = localStorage.getItem('income');
    if (savedIncome) {
      setIncome(Number(savedIncome)); // Set the income in parent component
      setInputValue(savedIncome); // Set the input field value
    }
  }, [setIncome]);

  const handleIncomeChange = (e) => {
    setInputValue(e.target.value); // Update input field value
  };

  const handleSetIncome = () => {
    const incomeValue = Number(inputValue);
    if (!isNaN(incomeValue)) {
      setIncome(incomeValue); // Update income state in parent component
      localStorage.setItem('income', incomeValue); // Save to localStorage
    }
  };

  return (
    <div>
      <label>Income: </label>
      <input
        type="number"
        value={inputValue}
        onChange={handleIncomeChange}
        placeholder="Enter income"
      />
      <button onClick={handleSetIncome}>Set Income</button>
    </div>
  );
};

export default IncomeTracker;
