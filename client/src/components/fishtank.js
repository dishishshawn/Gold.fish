import React, { useEffect, useState } from 'react';
import './fishtank.css';

const FishTank = ({ expenses, income }) => {
  const [fishPosition, setFishPosition] = useState({ x: 50, y: 50 });
  const [fishSize, setFishSize] = useState(50); // Start with a size of 50px
  const [foodItems, setFoodItems] = useState([]);
  const [maxFoodItems, setMaxFoodItems] = useState(10);
  const [showWarning, setShowWarning] = useState(false); // Correctly initialize state

  // Calculate fish growth based on expenses
  useEffect(() => {
    const newSize = Math.max(50, Math.min(100, (expenses / income) * 50 + 50)); // Base size of 50px, capped at 100px
    setFishSize(newSize);

    // Check if expenses match income
    if (expenses >= income) {
      setShowWarning(true); // Correct usage of setShowWarning
    } else {
      setShowWarning(false);
    }
  }, [expenses, income]);

  // Spawn food items based on expenses
  const spawnFood = () => {
    const foodAmount = Math.floor(expenses / 10); // Number of food items based on expenses
    const itemsToSpawn = Math.min(foodAmount, maxFoodItems); // Limit the number of food items

    const newFoodItems = [];
    for (let i = 0; i < itemsToSpawn; i++) {
      const foodX = Math.random() * 90 + 10; // Random x position within tank bounds
      const foodY = Math.random() * 90 + 10; // Random y position within tank bounds
      newFoodItems.push({ x: foodX, y: foodY });
    }

    setFoodItems(newFoodItems); // Set food items to state
  };

  // Move fish towards the nearest food
  const moveFish = () => {
    if (foodItems.length > 0) {
      const nearestFood = foodItems.reduce((closest, food) => {
        const currentDistance = Math.sqrt(
          Math.pow(fishPosition.x - food.x, 2) + Math.pow(fishPosition.y - food.y, 2)
        );
        const closestDistance = Math.sqrt(
          Math.pow(fishPosition.x - closest.x, 2) + Math.pow(fishPosition.y - closest.y, 2)
        );
        return currentDistance < closestDistance ? food : closest;
      });

      const directionX = nearestFood.x - fishPosition.x;
      const directionY = nearestFood.y - fishPosition.y;
      const distance = Math.sqrt(directionX ** 2 + directionY ** 2);

      const newX = fishPosition.x + (directionX / distance) * 2; // Adjust speed towards food
      const newY = fishPosition.y + (directionY / distance) * 2;

      setFishPosition({ x: newX, y: newY });
    }
  };

  // Check if fish eats any food
  const checkIfFishEatsFood = () => {
    setFoodItems(prevFoodItems => {
      return prevFoodItems.filter(food => {
        const distance = Math.sqrt(
          Math.pow(fishPosition.x - food.x, 2) + Math.pow(fishPosition.y - food.y, 2)
        );

        if (distance < 5) {
          return false; // Remove the food item
        }

        return true; // Keep the food if not eaten
      });
    });
  };

  // Move the fish and check for eating every 50ms
  useEffect(() => {
    const interval = setInterval(() => {
      moveFish();
      checkIfFishEatsFood();
    }, 50);

    return () => clearInterval(interval);
  }, [fishPosition, foodItems]);

  // Spawn food whenever expenses change
  useEffect(() => {
    spawnFood();
  }, [expenses]);

  return (
    <div>
      <div className="fish-tank">
        <div
          className="fish"
          style={{
            left: `${fishPosition.x}%`,
            top: `${fishPosition.y}%`,
            width: `${fishSize}px`,
            height: `${fishSize}px`,
            borderRadius: '50%',
            transform: `rotate(${Math.atan2(fishPosition.y - foodItems[0]?.y, fishPosition.x - foodItems[0]?.x) * (180 / Math.PI)}deg)` // Rotate the fish to face its movement direction
          }}
        ></div>
        {foodItems.map((food, index) => (
          <div
            key={index}
            className="food"
            style={{
              left: `${food.x}%`,
              top: `${food.y}%`,
              width: '10px',
              height: '10px',
              backgroundColor: 'orange',
              borderRadius: '50%',
            }}
          ></div>
        ))}
        {showWarning && (
          <div className="warning">
            Warning: Your expenses are greater than your income! There's no room for savings or unexpected costs. Consider adjusting your budget to create a financial cushion.
          </div>
        )}
      </div>

      <div className="financial-info">
        <div className="financial-item">
          <strong>Income: </strong>${income}
        </div>
        <div className="financial-item">
          <strong>Expenses: </strong>${expenses}
        </div>
      </div>
    </div>
  );
};

export default FishTank;