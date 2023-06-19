import React, { useState } from 'react';
import axios from 'axios';
import Checkbox from '../Checkbox';
import './JournalForm.css';

const JournalForm = () => {
  const [title, setTitle] = useState('');
  const [journalEntry, setJournalEntry] = useState('');

  const createEntry = async () => {
    const newEntry = {
      user_id: '6488473bfa7d92ab51dfef3f', //currently hardcoded
      title: title,
      content: journalEntry,
    };

    console.log(newEntry)
    // const response = await axios.post(`http://localhost:3000/journals`, newEntry);
    // Handle the response as needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEntry();

  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="journal-title-fm">Title</label>
      <input
        type="text"
        id="journal-title-fm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="journal-entry-fm">What is on your mind?</label>
      <textarea
        name="journal-entry-area"
        id="journal-entry-fm"
        cols="30"
        rows="10"
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
      {/* <button onClick={() => console.log(selectedSymptoms)}>Check selected symptoms</button> */}
    </form>
  );
};

export default JournalForm;
