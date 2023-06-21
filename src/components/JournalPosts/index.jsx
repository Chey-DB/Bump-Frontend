import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import { useAuth } from '../../Context'
import { DateCalendarIcon } from '..'

import './JournalPosts.css'

const JournalPosts = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const { user } = useAuth();

  const getJournalEntries = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/journals/user/${user.userId}`);
      setJournalEntries(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJournalEntry = async (entryId) => {
    const confirmed = window.confirm('Are you sure you want to delete this entry?');
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:3000/journals/${entryId}`, { withCredentials: true });
      getJournalEntries();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJournalEntries();
  }, []);

  return (
    <div className='jn-post-wrapper'>
      {journalEntries.map((entry, index) => {
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
      })}
    </div>

  );

}

export default JournalPosts