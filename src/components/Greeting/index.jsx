import React, { useState} from 'react';
import './styles.css';

const Greeting = ({ name }) => {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 0 && currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = `Good Evening`;
  }

  return <h1>{name ? `${greeting}, ${name}` : greeting}</h1>;
};

export default Greeting;