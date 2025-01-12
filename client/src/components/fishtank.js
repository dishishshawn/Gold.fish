import React, { useState, useEffect } from "react";

const FishTank = ({ income, expenses }) => {
  const [tankSize, setTankSize] = useState(100); // Default tank size
  const [fishSize, setFishSize] = useState(10); // Default fish size

  useEffect(() => {
    // Adjust tank size based on income
    let newSize = Math.min(100 + income / 100, 500); // Tank size grows with income
    setTankSize(newSize);

    // Adjust fish size based on expenses
    let newFishSize = Math.max(10, 10 + expenses / 50); // Fish size grows with expenses
    setFishSize(newFishSize);
  }, [income, expenses]);

  return (
    <div style={{ width: `${tankSize}%`, height: "200px", backgroundColor: "lightblue", position: "relative" }}>
      <div
        style={{
          width: `${fishSize}%`,
          height: `${fishSize}%`,
          backgroundColor: "gold",
          borderRadius: "50%",
          position: "absolute",
        }}
      ></div>
      <h3>Fish Tank</h3>
      <p>Tank Size: {Math.round(tankSize)}</p>
      <p>Fish Size: {Math.round(fishSize)}</p>
    </div>
  );
};

export default FishTank;
