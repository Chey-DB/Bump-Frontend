import React, { useEffect, useState } from 'react';
import './styles.css';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const storedDate = localStorage.getItem('motivationalQuoteDate');

    if (storedDate) {
      const today = new Date().toLocaleDateString();
      if (storedDate === today) {
        const storedQuote = localStorage.getItem('motivationalQuote');
        if (storedQuote) {
          setQuote(storedQuote);
          setLastUpdated(storedDate);
          return;
        }
      }
    }

    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const randomQuote = Math.floor(Math.random() * data.length);
        setQuote(data[randomQuote].text);
        setLastUpdated(new Date().toLocaleDateString());
        localStorage.setItem('motivationalQuote', data[randomQuote].text);
        localStorage.setItem('motivationalQuoteDate', new Date().toLocaleDateString());
      });
  }, []);

  return (
    <div className="motivational-quote-container">
      <div className="motivational-quote">
         <span className="quote-mark quote-mark-left">&#8220;</span>
          <h3>Motivational Quote of the day:</h3>
          <p>{quote}</p>
        <span className="quote-mark quote-mark-right">&#8220;</span>
      </div>
    </div>
  );
};

export default MotivationalQuote;

