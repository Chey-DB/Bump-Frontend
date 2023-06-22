import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { DateCalendarIcon } from '..'

import './JournalPosts.css'

const JournalPosts = ({ entry, index, deleteJournalEntry }) => {

  const createdDate = moment(entry.createdOn);
  const formattedDate = createdDate.format('MMMM YYYY');
  const formattedTime = createdDate.format('HH:mm');
  const dayOfWeek = createdDate.format('dddd');
  const dayOfMonth = createdDate.format('D');


  return (
    <div className='jn-post-holder' key={index}>
      <div className='jnp-title-section'>
        <DateCalendarIcon dayOfMonth={dayOfMonth} dayOfWeek={dayOfWeek} />
        <div className='jnp-info-holder'>
          <h2>{entry.title}</h2>
          <div className='jnp-datetime'>
            <p>{formattedDate}</p>
            <p>•</p>
            <p>{formattedTime}</p>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-trash-can fa-lg jnp-delete-button" onClick={() => deleteJournalEntry(entry._id)}></i>
      <p>{entry.content}</p>
      <div className='jnp-SM-holder'>
        <div className='jnp-symtom-display'>
          <h3>I HAD</h3>
          <ul>
            {entry.symptoms.map((symptom, index) => {
              const symptomDisplay = symptom.replace(/-/g, ' ');
              return (
                <div key={index} className='SM-icon-holder' style={{ display: 'inline-block' }}>
                  <img src={`symptoms-mood-icons/${symptom}.png`} className='jn-display-icons' alt={symptom}></img>
                  <p className='hide-icon-name'>{symptomDisplay}</p>
                </div>
              );
            })}
          </ul>
        </div>
        <div className='jnp-mood-display'>
          <h3>I WAS FEELING</h3>
          <ul className='SM-icon-holder'>
            {entry.mood.map((mood, index) => (
              <div key={index} className='SM-icon-holder' style={{ display: 'inline-block' }}>
                <img src={`symptoms-mood-icons/${mood}.png`} className='jn-display-icons'></img>
                <p className='hide-icon-name'>{mood}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JournalPosts