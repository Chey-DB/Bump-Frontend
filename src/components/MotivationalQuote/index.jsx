import React, { useEffect, useState } from 'react';
import './styles.css';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const randomQuote = Math.floor(Math.random() * data.length);
        setQuote(data[randomQuote].text);
      });
  }, []);

  return (
    <div className="motivational-quote-container">
      <div className="motivational-quote">
        <span className="quote-mark quote-mark-left">&#8220;</span>
        <h3>Motivational Quote of the day:</h3>
        <p>{quote}</p>
        <span className="quote-mark quote-mark-right">&#8221;</span>
      </div>
    </div>
  );
};

export default MotivationalQuote;
