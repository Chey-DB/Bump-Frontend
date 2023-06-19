import React, { useState } from 'react';
import axios from 'axios';
import Checkbox from '../Checkbox';
import './JournalForm.css';

const JournalForm = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [title, setTitle] = useState('');
  const [journalEntry, setJournalEntry] = useState('');

  const handleSymptomChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSelectedSymptoms((prevSelectedSymptoms) => [...prevSelectedSymptoms, id]);
    } else {
      setSelectedSymptoms((prevSelectedSymptoms) =>
        prevSelectedSymptoms.filter((symptom) => symptom !== id)
      );
    }
  };

  const handleMoodChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSelectedMoods((prevSelectedMoods) => [...prevSelectedMoods, id]);
    } else {
      setSelectedMoods((prevSelectedMoods) =>
        prevSelectedMoods.filter((mood) => mood !== id)
      );
    }
  };

  const createEntry = async () => {
    const newEntry = {
      user_id: '6488473bfa7d92ab51dfef3f', //currently hardcoded
      title: title,
      content: journalEntry,
      symptoms: selectedSymptoms,
      mood: selectedMoods,
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
      <label>Symptoms</label>
      <div className="side-scroll symptoms-holder">
        <Checkbox
          checkboxIcon='symptoms-mood-icons/inflammation.png'
          checkboxTitle='Sore Breasts'
          CheckboxId='sore-breasts'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon='symptoms-mood-icons/nausea.png'
          checkboxTitle='Nausea'
          CheckboxId='nausea'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Fatigue'
          CheckboxId='fatigue'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Cravings'
          CheckboxId='cravings'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Mood Swings'
          CheckboxId='mood-swings'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Headaches'
          CheckboxId='headaches'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Constipation'
          CheckboxId='constipation'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Dizziness'
          CheckboxId='dizziness'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Discharge'
          CheckboxId='discharge'
          handleChange={handleSymptomChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Backache'
          CheckboxId='backache'
          handleChange={handleSymptomChange}
        />
      </div>
      <div className="side-scroll moods-holder">
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Happy'
          CheckboxId='happy'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Sad'
          CheckboxId='sad'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Excited'
          CheckboxId='excited'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Angry'
          CheckboxId='angry'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Anxious'
          CheckboxId='anxious'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Content'
          CheckboxId='content'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Stressed'
          CheckboxId='stressed'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Calm'
          CheckboxId='calm'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Frustrated'
          CheckboxId='frustrated'
          handleChange={handleMoodChange}
        />
        <Checkbox
          checkboxIcon=''
          checkboxTitle='Energetic'
          CheckboxId='energetic'
          handleChange={handleMoodChange}
        />
      </div>
      <button type="submit">Submit</button>
      <button onClick={() => console.log(selectedSymptoms)}>Check selected symptoms</button>
    </form>
  );
};

export default JournalForm;
