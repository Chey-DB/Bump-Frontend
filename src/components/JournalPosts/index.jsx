import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../Context'

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
          const createdDate = new Date(entry.createdOn);
          const formattedDate = `${createdDate.getDate()}/${createdDate.getMonth()}/${createdDate.getFullYear()}`
          const formattedTime = createdDate.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          });

          return (
            <div className='jn-post-holder' key={index}>
              <h3>{entry.title}</h3>
              <h3>{formattedDate}</h3>
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