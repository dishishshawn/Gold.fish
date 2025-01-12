import React, { useEffect, useState } from 'react';
import './fishtank.css';

const FishTank = ({ expenses, income }) => {
  const [fishPosition, setFishPosition] = useState({ x: 50, y: 50 });
  const [fishSize, setFishSize] = useState(50);
  const [foodItems, setFoodItems] = useState([]);
  const [maxFoodItems, setMaxFoodItems] = useState(10);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const newSize = Math.max(50, Math.min(100, (expenses / income) * 50 + 50));
    setFishSize(newSize);

    if (expenses >= income) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [expenses, income]);

  // Spawn food with varying rate and size based on the ratio
  const spawnFood = () => {
    const spawnRate = Math.max(0.1, Math.min(1, expenses / income)); // Ratio between 0.1 and 1
    const foodAmount = Math.floor(spawnRate * maxFoodItems); // Determine how much food to spawn
    const foodSize = Math.max(10, Math.min(30, spawnRate * 30)); // Make food bigger as the ratio increases

    const newFoodItem = {
      x: Math.random() * 90 + 10,
      y: Math.random() * 90 + 10,
      size: foodSize, // Add size property
    };
    
    // Add a new food item to the list
    setFoodItems(prevFoodItems => [...(Array.isArray(prevFoodItems) ? prevFoodItems : []), newFoodItem]);
  };

  // Move the fish towards the nearest food
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

      const newX = fishPosition.x + (directionX / distance) * 2;
      const newY = fishPosition.y + (directionY / distance) * 2;

      setFishPosition({ x: newX, y: newY });
    }
  };

  const checkIfFishEatsFood = () => {
    setFoodItems(prevFoodItems => {
      return prevFoodItems.filter(food => {
        const distance = Math.sqrt(
          Math.pow(fishPosition.x - food.x, 2) + Math.pow(fishPosition.y - food.y, 2)
        );

        if (distance < 5) {
          return false; // Remove food item when eaten
        }
        return true; // Keep food if not eaten
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

  useEffect(() => {
    // Clear food items whenever expenses change
    setFoodItems([]);
    
    // Set spawn frequency based on income/expense ratio
    const spawnFrequency = Math.max(500, 3000 - (expenses / income) * 2000); // Gradually faster as ratio increases

    const foodInterval = setInterval(() => {
      spawnFood(); // Spawn one food item
    }, spawnFrequency);

    return () => clearInterval(foodInterval);
  }, [expenses, income]);

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
            transform: `rotate(${Math.atan2(fishPosition.y - foodItems[0]?.y, fishPosition.x - foodItems[0]?.x) * (180 / Math.PI)}deg)`
          }}
        ></div>
        {foodItems.map((food, index) => (
          <div
            key={index}
            className="food"
            style={{
              left: `${food.x}%`,
              top: `${food.y}%`,
              width: `${food.size}px`,
              height: `${food.size}px`,
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
