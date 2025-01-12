import React, { useState, useEffect } from "react";

const quotesList = [
  "The best way to predict your future is to create it.",
  "Do not save what is left after spending, but spend what is left after saving.",
  "Wealth consists not in having great possessions, but in having few wants.",
  "Your wealth can be spent, but your knowledge is yours forever."
];

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotesList.length);
      setCurrentQuote(quotesList[randomIndex]);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote">
      <p>{currentQuote}</p>
    </div>
  );
};

export default Quotes;
