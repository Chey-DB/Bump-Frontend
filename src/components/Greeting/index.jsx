import React from 'react';
import './styles.css';

const Greeting = () => {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 0 && currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = `Good evening`;
  }

  return <h1>{greeting}</h1>;
};

export default Greeting;