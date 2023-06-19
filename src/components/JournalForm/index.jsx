import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { updateNewEntry, resetMoodAndSymptoms, resetNewEntry } from '../../Features/newEntrySlice';
import { SymptomMoodPicker } from '..';
import './JournalForm.css';

const modules = {
  toolbar: [
    [{ 'header': [3, false] }],
    ['bold', 'italic', 'underline','strike'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

const JournalForm = () => {
  const dispatch = useDispatch();
  const newEntry = useSelector((state) => state.newEntry);
  const [value, setValue] = useState('');

  const handleTitleChange = (e) => {
    const title = e.target.value;
    dispatch(updateNewEntry({ ...newEntry, title: title }));
  };

  const handleJournalEntryChange = (e) => {
    const journalEntry = e
    dispatch(updateNewEntry({ ...newEntry, content: journalEntry }))
  };

  const createEntry = async () => {
    console.log(newEntry);
    // const response = await axios.post(`http://localhost:3000/journals`, newEntry);
    // Handle the response as needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetNewEntry())
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
      <ReactQuill theme="snow" value={newEntry.content} onChange={handleJournalEntryChange} modules={modules} formats={formats}/>
      <button onClick={() => dispatch(resetMoodAndSymptoms())}>Remove Symptoms and Moods</button>
      <SymptomMoodPicker />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JournalForm;
