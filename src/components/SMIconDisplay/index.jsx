import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SMIconDisplay.css'

const SMIconDisplay = () => {
  const dispatch = useDispatch();
  const newEntry = useSelector((state) => state.newEntry);

  const symptoms = newEntry.symptoms
  const moods = newEntry.mood

  return (
    <>
      <div className='symptom-mood-icon-wp'>
        <div className="SM-icon-wrapper">
          {symptoms.map((symptom, index) => {
            const symptomDisplay = symptom.replace(/-/g, ' ');
            return (
              <div key={index} className='SM-icon-holder'>
                <img src={`symptoms-mood-icons/${symptom}.png`} className='jn-display-icons' alt={symptom}></img>
                <p className='hide-icon-name'>{symptomDisplay}</p>
              </div>
            );
          })}
        </div>
        <div className='sm-divider'>

        </div>
        <div className='SM-icon-wrapper'>
          {
            moods.map((mood, index) => (
              <div key={index} className='SM-icon-holder'>
                <img src={`symptoms-mood-icons/${mood}.png`} className='jn-display-icons'></img>
                <p className='hide-icon-name'>{mood}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SMIconDisplay