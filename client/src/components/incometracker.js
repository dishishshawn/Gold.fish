// components/incometracker.js
import React from 'react';

const IncomeTracker = ({ setIncome }) => {
  const handleIncomeChange = (e) => {
    setIncome(Number(e.target.value)); // Update income state
  };

  return (
    <div>
      <label>Income: </label>
      <input
        type="number"
        onChange={handleIncomeChange}
        placeholder="Enter income"
      />
    </div>
  );
};

export default IncomeTracker;
