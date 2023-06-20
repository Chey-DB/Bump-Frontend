import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import { useAuth } from '../../Context'
import { DateCalendarIcon } from '..'

import './JournalPosts.css'

const JournalPosts = () => {
  const [journalEntries, setJournalEntries] = useState()
  const { user } = useAuth()

  const getJournalEnties = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/journals/user/${user.userId}`)
      setJournalEntries(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getJournalEnties()
    console.log(journalEntries)
  }, [])


  return (
    <div className='jn-post-wrapper'>
      {journalEntries &&
        journalEntries.map((entry, index) => {
          const createdDate = moment(entry.createdOn);
          const formattedDate = createdDate.format("MMMM YYYY");
          const formattedTime = createdDate.format("HH:mm");
          const dayOfWeek = createdDate.format("dddd");
          const dayOfMonth = createdDate.format("D");

          return (
            <div className='jn-post-holder' key={index}>
              <div className='jnp-title-section'>
                <DateCalendarIcon dayOfMonth={dayOfMonth} dayOfWeek={dayOfWeek}/>
                <div>
                  <h2>{entry.title}</h2>
                  <h3>{formattedDate}</h3>
                </div>
              </div>
              <h3>{formattedTime}</h3>
              <p>{entry.content}</p>
              <h3>Mood:</h3>
              <ul>
                {entry.mood.map((mood, moodIndex) => (
                  <li key={moodIndex}>{mood}</li>
                ))}
              </ul>
              <h3>Symptoms:</h3>
              <ul>
                {entry.symptoms.map((symptom, symptomIndex) => (
                  <li key={symptomIndex}>{symptom}</li>
                ))}
              </ul>
            </div>
          );
        })}
    </div>

  );

}

export default JournalPosts