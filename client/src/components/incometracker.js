import React, { useState } from "react";

const IncomeTracker = ({ setIncome }) => {
  const [income, setLocalIncome] = useState("");

  const handleIncomeChange = (e) => {
    setLocalIncome(e.target.value);
    setIncome(e.target.value); // Pass income value to parent component
  };

  return (
    <div>
      <h2>Track Your Income</h2>
      <input
        type="number"
        placeholder="Enter your income"
        value={income}
        onChange={handleIncomeChange}
      />
    </div>
  );
};

export default IncomeTracker;
