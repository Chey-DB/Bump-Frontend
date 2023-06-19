import React, { useState } from 'react'

import { Checkbox } from '..'
import './SymptomMoodPicker.css'

const SymptomMoodPicker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedMoods, setSelectedMoods] = useState([]);

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

  return (
    <>
      <h3>Symptoms</h3>
      <div className="scroll symptoms-holder">
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
      <i className="fa-solid fa-caret-down"></i>
      <h3>Moods</h3>
      <div className="scroll moods-holder">
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
      <i className="fa-solid fa-caret-down"></i>
    </>
  )
}

export default SymptomMoodPicker