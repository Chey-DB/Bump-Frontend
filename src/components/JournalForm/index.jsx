import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import 'react-quill/dist/quill.snow.css';

import { updateNewEntry, resetMoodAndSymptoms, resetNewEntry } from '../../Features/newEntrySlice';
import { SymptomMoodPicker, SMIconDisplay } from '..';
import { useAuth } from '../../Context';
import './JournalForm.css';

const JournalForm = () => {
  const dispatch = useDispatch();
  const newEntry = useSelector((state) => state.newEntry);
  const {user} = useAuth()

  useEffect(() => {
    dispatch(updateNewEntry({ ...newEntry, user_id: user.userId }));
  }, []);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    dispatch(updateNewEntry({ ...newEntry, title: title }));
  };

  const handleJournalEntryChange = (e) => {
    const journalEntry = e.target.value
    dispatch(updateNewEntry({ ...newEntry, content: journalEntry }))
  };
  
  const createEntry = async () => {

    try {
      const response = await axios.post(`http://localhost:3000/journals`, newEntry);
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEntry();
    dispatch(resetNewEntry());
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
          <textarea name="journalContent" id="journal-content-fm" value={newEntry.content} onChange={handleJournalEntryChange} required></textarea>
          <label htmlFor="journal-content-fm">Journal Entry</label>
        </div>
        <SMIconDisplay />
        <div className='symptom-mood-wrapper fm-group'>
          <SymptomMoodPicker />
          <button type='button' onClick={() => dispatch(resetMoodAndSymptoms())}>Remove</button>
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

// const modules = {
//   toolbar: [
//     [{ 'header': [1, 2, false] }],
//     ['bold', 'italic', 'underline', 'strike'],
//     [{ 'list': 'bullet' }],
//   ],
// };

// const formats = [
//   'header',
//   'bold', 'italic', 'underline', 'strike', 'blockquote',
//   'list', 'bullet', 'indent',
// ];