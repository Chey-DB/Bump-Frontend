import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewEntry, resetMoodAndSymptoms } from '../../Features/newEntrySlice';
import { Checkbox, GlobalModal } from '..';
import './SymptomMoodPicker.css';

const SymptomMoodPicker = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const newEntry = useSelector((state) => state.newEntry);

  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [show]);

  const handleSymptomChange = (e) => {
    if (!e || !e.target) {
      return;
    }
  
    const { id, checked } = e.target;
    const updatedSymptoms = checked
      ? [...newEntry.symptoms, id]
      : newEntry.symptoms.filter((symptom) => symptom !== id);
    dispatch(updateNewEntry({ ...newEntry, symptoms: updatedSymptoms }));
  };

  const handleMoodChange = (e) => {
    if (!e || !e.target) {
      return; 
    }
  
    const { id, checked } = e.target;
    const updatedMoods = checked
      ? [...newEntry.mood, id]
      : newEntry.mood.filter((mood) => mood !== id);
    dispatch(updateNewEntry({ ...newEntry, mood: updatedMoods }));
  };
  

  const handleAdd = () => {
    handleMoodChange();
    handleSymptomChange();
    setShow(false);
    // console.log(newEntry);
  };

  return (
    <>
      <button onClick={() => {setShow(true), dispatch(resetMoodAndSymptoms())}}>Add Symptoms and Moods</button>
      <GlobalModal show={show} onClose={() => setShow(false)} title="Select Moods and Symptoms" footer={<button onClick={handleAdd}>Add</button>}>
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
      </GlobalModal>
    </>
  )
}

export default SymptomMoodPicker