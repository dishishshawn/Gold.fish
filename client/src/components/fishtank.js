// components/fishtank.js
import React, { useEffect, useState } from 'react';
import './fishtank.css'; // Make sure to add CSS styles

const FishTank = () => {
  const [fishPosition, setFishPosition] = useState({ x: 50, y: 50 }); // Initial position
  const [fishDirection, setFishDirection] = useState('right'); // Fish movement direction

  const moveFish = () => {
    setFishPosition(prev => {
      let newX = prev.x;
      let newY = prev.y;

      if (fishDirection === 'right') {
        newX += 2;
        if (newX > 90) setFishDirection('down');
      }
      if (fishDirection === 'down') {
        newY += 2;
        if (newY > 90) setFishDirection('left');
      }
      if (fishDirection === 'left') {
        newX -= 2;
        if (newX < 10) setFishDirection('up');
      }
      if (fishDirection === 'up') {
        newY -= 2;
        if (newY < 10) setFishDirection('right');
      }

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    const interval = setInterval(moveFish, 100); // Move fish every 100ms
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [fishDirection]); // Depend on fishDirection to trigger move

  return (
    <div className="fish-tank">
      <div
        className="fish"
        style={{
          left: `${fishPosition.x}%`,
          top: `${fishPosition.y}%`,
        }}
      ></div>
    </div>
  );
};

export default FishTank;
