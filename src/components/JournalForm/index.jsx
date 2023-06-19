import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { updateNewEntry, resetNewEntry, resetMoodAndSymptoms } from '../../Features/newEntrySlice';
import { SymptomMoodPicker } from '..';
import './JournalForm.css';

const JournalForm = () => {
  const dispatch = useDispatch();
  const newEntry = useSelector((state) => state.newEntry);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    dispatch(updateNewEntry({ ...newEntry, title: title }));
  };

  const handleJournalEntryChange = (e) => {
    const journalEntry = e.target.value;
    dispatch(updateNewEntry({ ...newEntry, content: journalEntry }));
  };

  const createEntry = async () => {
    console.log(newEntry);
    const response = await axios.post(`http://localhost:3000/journals`, newEntry);
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
        value={newEntry.title}
        onChange={handleTitleChange}
      />
      <label htmlFor="journal-entry-fm">What is on your mind?</label>
      <textarea
        name="journal-entry-area"
        id="journal-entry-fm"
        cols="30"
        rows="10"
        value={newEntry.content}
        onChange={handleJournalEntryChange}
      ></textarea>
      <button onClick={() => dispatch(resetMoodAndSymptoms())}>Remove Symptoms and Moods</button>
      <SymptomMoodPicker />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JournalForm;
