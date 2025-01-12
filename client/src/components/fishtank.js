// components/fishtank.js
import React, { useEffect, useState } from 'react';
import './fishtank.css';

const FishTank = ({ expenses, income }) => {
  const [fishPosition, setFishPosition] = useState({ x: 50, y: 50 });
  const [fishSize, setFishSize] = useState(50); // Start with a size of 50px
  const [fishSpeed, setFishSpeed] = useState({ xSpeed: 2, ySpeed: 2 });
  const [foodItems, setFoodItems] = useState([]);

  // Move fish randomly within the tank
  const moveFish = () => {
    setFishPosition(prev => {
      let newX = prev.x + fishSpeed.xSpeed;
      let newY = prev.y + fishSpeed.ySpeed;

      // Change direction randomly
      if (Math.random() < 0.02) {
        setFishSpeed(prevSpeed => ({
          ...prevSpeed,
          xSpeed: Math.random() < 0.5 ? 2 : -2,
        }));
      }

      if (Math.random() < 0.02) {
        setFishSpeed(prevSpeed => ({
          ...prevSpeed,
          ySpeed: Math.random() < 0.5 ? 2 : -2,
        }));
      }

      // Boundary checks
      if (newX > 90) newX = 90;
      if (newX < 10) newX = 10;
      if (newY > 90) newY = 90;
      if (newY < 10) newY = 10;

      return { x: newX, y: newY };
    });
  };

  // Spawn food items based on expenses
  const spawnFood = () => {
    const foodAmount = Math.floor((income / expenses) / 10); // Number of food items based on expenses to income ratio
    const maxFoodItems = 10; // Cap the number of food items in the tank
    const newFoodItems = [];

    // Make sure we don't exceed the cap
    const itemsToSpawn = Math.min(foodAmount, maxFoodItems);

    for (let i = 0; i < itemsToSpawn; i++) {
      const foodX = Math.random() * 90 + 10; // Random x position within tank bounds
      const foodY = Math.random() * 90 + 10; // Random y position within tank bounds
      newFoodItems.push({ x: foodX, y: foodY });
    }

    setFoodItems(newFoodItems); // Set food items to state
  };

  // Check if fish eats any food
  const checkIfFishEatsFood = () => {
    setFoodItems(prevFoodItems => {
      return prevFoodItems.filter(food => {
        const distance = Math.sqrt(
          Math.pow(fishPosition.x - food.x, 2) + Math.pow(fishPosition.y - food.y, 2)
        );

        // If the fish is close to the food, it eats it and grows
        if (distance < 5) {
          // Fish eats the food and grows
          
          // Want to update later to increase size dynamically
          setFishSize(prevSize => prevSize + 2); // Increase fish size 

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
  }, [fishPosition, fishSize, foodItems]);

  // Spawn food whenever expenses change
  useEffect(() => {
    spawnFood();
  }, [expenses]);

  return (
    <div className="fish-tank">
      <div
        className="fish"
        style={{
          left: `${fishPosition.x}%`,
          top: `${fishPosition.y}%`,
          width: `${fishSize}px`,
          height: `${fishSize}px`,
          borderRadius: '50%',
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
    </div>
  );
};

export default FishTank;
