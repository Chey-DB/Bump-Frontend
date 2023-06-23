import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import 'react-quill/dist/quill.snow.css';

import {
  updateNewEntry,
  resetMoodAndSymptoms,
  resetNewEntry,
} from "../../Features/newEntrySlice";
import { SymptomMoodPicker, SMIconDisplay } from "..";
import { useAuth } from "../../Context";
import "./JournalForm.css";

const JournalForm = ({ addJournalEntry }) => {
  const dispatch = useDispatch();
  const newEntry = useSelector((state) => state.newEntry);
  const { user } = useAuth();

  useEffect(() => {
    dispatch(updateNewEntry({ ...newEntry, user_id: user.userId }));
  }, []);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    dispatch(updateNewEntry({ ...newEntry, title: title }));
  };

  const handleJournalEntryChange = (e) => {
    const journalEntry = e.target.value;
    dispatch(updateNewEntry({ ...newEntry, content: journalEntry }));
  };

  const createEntry = async () => {
    try {
      const response = await axios.post(
        `https://bump-backend.onrender.com/journals`,
        newEntry
      );
      addJournalEntry(newEntry);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEntry();
    dispatch(resetNewEntry());
  };

  const autoResizeTextarea = () => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  };

  return (
    <div className="journal-form-wrapper">
      <h2>Add New Journal Entry</h2>
      <form onSubmit={handleSubmit} id="journal-entry-fm">
        <div className="fm-group">
          <input
            type="text"
            id="journal-title-fm"
            value={newEntry.title}
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="journal-title-fm">Title</label>
        </div>
        <div className="fm-group">
          <textarea
            name="journalContent"
            id="journal-content-fm"
            value={newEntry.content}
            onChange={handleJournalEntryChange}
            onInput={autoResizeTextarea}
            required
          ></textarea>
          <label htmlFor="journal-content-fm">Journal Entry</label>
        </div>
        <SMIconDisplay />
        <div className="symptom-mood-wrapper fm-group">
          <SymptomMoodPicker />
          <button
            className="primary-btn primary-btn-green red-btn"
            type="button"
            onClick={() => dispatch(resetMoodAndSymptoms())}
            style={{ marginTop: "10px" }}
          >
            Remove
          </button>
        </div>
        <button className="primary-btn submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JournalForm;

{
  /* <ReactQuill 
  theme="snow" 
  value={newEntry.content} 
  onChange={handleJournalEntryChange} 
  modules={modules} 
  formats={formats}
  placeholder='What is on your mind?'
/> */
}

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
