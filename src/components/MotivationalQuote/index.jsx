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

    fetch('http://localhost:3000/quotes') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        const quotesWithoutNumbers = data[0].quotesWithoutNumbers;
        const randomQuote = Math.floor(Math.random() * quotesWithoutNumbers.length);
        setQuote(quotesWithoutNumbers[randomQuote]);
        setLastUpdated(new Date().toLocaleDateString());
        localStorage.setItem('motivationalQuote', quotesWithoutNumbers[randomQuote]);
        localStorage.setItem('motivationalQuoteDate', new Date().toLocaleDateString());
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="motivational-quote-wrapper">
      <div className="motivational-quote-container">
        <img src="quotation-marks.png" alt="quotation-marks" className='quotation-mark-img' id='left-qm' />
        <div className="motivational-quote">
          <h3 id='quote-header'>Motivational Quote of the day:</h3>
          <h2 id='quote-content'>{quote}</h2>
        </div>
        <img src="quotation-marks.png" alt="quotation-marks" className='quotation-mark-img' id='right-qm' />
      </div>
    </div>
  );
};

export default MotivationalQuote;