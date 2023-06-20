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
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'bullet' }],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
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
    <div className='journal-form-wrapper'>
      <h2>Add New Journal Entry</h2>
      <form onSubmit={handleSubmit} id='journal-entry-fm'>
        <div className='fm-group'>
          <input
            type="text"
            id="journal-title-fm"
            value={newEntry.title}
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="journal-title-fm" >Title</label>
        </div>
        <div className='fm-group'>
          <textarea name="journalContent" id="journal-content-fm" required></textarea>
          <label htmlFor="journal-content-fm">Journal Entry</label>
        </div>
        <div className='symptom-mood-icon-wp'>
          <div className="symptom-icon-wrapper">
            symptoms
          </div>
          <div className='sm-divider'>

          </div>
          <div className='mood-icon-wrapper'>
            moods
          </div>
        </div>
        <div className='symptom-mood-wrapper fm-group'>
          <SymptomMoodPicker />
          <button onClick={() => dispatch(resetMoodAndSymptoms())}>Remove</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JournalForm;

{/* <ReactQuill 
  theme="snow" 
  value={newEntry.content} 
  onChange={handleJournalEntryChange} 
  modules={modules} 
  formats={formats}
  placeholder='What is on your mind?'
/> */}