import React, { useState, useEffect } from "react";
import './quote.css'

const quotesList = [
  "Success is not the key to happiness; happiness is the key to success.", 
"Believe you can and you're halfway there.", 
"The only way to achieve the impossible is to believe it is possible.", 
"The best time to plant a tree was 20 years ago. The second best time is now.", 
"You are never too old to set another goal or to dream a new dream.", 
"Your life does not get better by chance, it gets better by change.", 
"Everything you can imagine is real.", 
"The only limit to our realization of tomorrow is our doubts of today.", 
"Dream big. Start small. Act now.", 
"Success is not in what you have, but who you are.", 
"The future depends on what we do in the present.", 
"The way to get started is to quit talking and begin doing.", 
"Do not wait to strike till the iron is hot, but make it hot by striking.", 
"A goal without a plan is just a wish.", 
"Failure will never overtake me if my determination to succeed is strong enough.", 
"You don’t have to be great to start, but you have to start to be great.", 
"Success usually comes to those who are too busy to be looking for it.", 
"Hardships often prepare ordinary people for an extraordinary destiny.", 
"The difference between who you are and who you want to be is what you do.", 
"You don’t have to be perfect to be amazing.", 
"In the middle of every difficulty lies opportunity.", 
"The harder you work for something, the greater you’ll feel when you achieve it.", 
"If you can dream it, you can do it.", 
"Don’t wait for the perfect moment, take the moment and make it perfect.", 
"A winner is a dreamer who never gives up.", 
"Don’t watch the clock; do what it does. Keep going.", 
"Don’t count the days, make the days count.", 
"Act as if what you do makes a difference. It does.", 
"Success is not the result of spontaneous combustion. You must set yourself on fire.", 
"It’s not whether you get knocked down, it’s whether you get up.", 
"The harder the battle, the sweeter the victory.", 
"Do one thing every day that scares you.", 
"Don't limit your challenges. Challenge your limits.", 
"You are never too old to set another goal or to dream a new dream.", 
"Opportunities don’t happen, you create them.", 
"Success doesn’t come from what you do occasionally, it comes from what you do consistently.", 
"What you get by achieving your goals is not as important as what you become by achieving your goals.", 
"The road to success and the road to failure are almost exactly the same.", 
"Success is not final, failure is not fatal: It is the courage to continue that counts.", 
"You have within you right now, everything you need to deal with whatever the world can throw at you.", 
"Nothing will work unless you do.", 
"The only place where success comes before work is in the dictionary.", 
"Success is not in what you have, but who you are.", 
"Success is not how high you have climbed, but how you make a positive difference to the world.", 
"Don’t be afraid to give up the good to go for the great.", 
"The best revenge is massive success.", 
"The only way to do great work is to love what you do.", 
"Success is a journey, not a destination.", 
"Dream big. Work hard. Stay focused.", 
"Success is the sum of small efforts, repeated day in and day out.", 
"It always seems impossible until it’s done.", 
"The most difficult thing is the decision to act, the rest is merely tenacity.", 
"Do what you can with all you have, wherever you are.", 
"Success is not measured by what you accomplish, but by the obstacles you overcome.", 
"It’s not about how bad you want it, it’s about how hard you’re willing to work for it.", 
"Life is what happens when you're busy making other plans.", 
"Small daily improvements over time lead to stunning results.", 
"The best way to predict your future is to create it.", 
"Success is the result of preparation, hard work, and learning from failure.", 
"Don’t be afraid to fail. Be afraid not to try.", 
"You don’t have to be great to start, but you have to start to be great.", 
"Success comes from knowing that you did your best to become the best that you are capable of becoming.", 
"If you want something you’ve never had, you must be willing to do something you’ve never done.", 
"Don’t stop when you’re tired. Stop when you’re done.", 
"Success is achieved and maintained by those who try and keep trying.", 
"Hard work beats talent when talent doesn’t work hard.", 
"Success is walking from failure to failure with no loss of enthusiasm.", 
"You can’t cross the sea merely by standing and staring at the water.", 
"What lies behind us and what lies before us are tiny matters compared to what lies within us.", 
"Success is not about being the best. It’s about always getting better.", 
"The key to success is to start before you are ready.", 
"A year from now, you may wish you had started today.", 
"Success doesn’t happen overnight, but it happens if you keep showing up.", 
"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.", 
"It does not matter how slowly you go as long as you do not stop.", 
"You can have anything you want, but you must give up the belief that you can’t have it.", 
"Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.", 
"Success is how high you bounce when you hit bottom.", 
"Success is finding satisfaction in giving a little more than you take.", 
"Great things never come from comfort zones.", 
"Don’t let yesterday take up too much of today.", 
"Success is the progressive realization of a worthy goal or ideal.", 
"The secret of getting ahead is getting started.", 
"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.", 
"Do not wait for leaders; do it alone, person to person.", 
"Success is the ability to go from one failure to another with no loss of enthusiasm.", 
"Success is the sum of small efforts, repeated day in and day out.", 
"Success comes from doing what you love.", 
"Success doesn’t come to you. You go to it.", 
"Don’t be afraid to give up the good to go for the great.", 
"Success is not the absence of failure; it’s the persistence through failure.", 
"The only limit to our realization of tomorrow is our doubts of today.", 
"Don’t wait for the perfect moment, take the moment and make it perfect.", 
"Do something today that your future self will thank you for.", 
"Success is not just about achieving your goals, but also about making a difference in others’ lives.", 
"The key to success is to focus on goals, not obstacles.", 
"Success is not the absence of obstacles, but the ability to overcome them.", 
"Success requires no apologies. Failure permits no alibis.", 
"Success is not in what you have, but in who you are.", 
"If you are not willing to risk the usual, you will have to settle for the ordinary."
];

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(
    quotesList[Math.floor(Math.random() * quotesList.length)] // Initialize with a random quote
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotesList.length);
      setCurrentQuote(quotesList[randomIndex]);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote">
      <p>{currentQuote}</p>
    </div>
  );
};

export default Quotes;
