import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewEntry, resetMoodAndSymptoms } from '../../Features/newEntrySlice';
import { Checkbox, GlobalModal } from '..';
import './SymptomMoodPicker.css';

const SymptomMoodPicker = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const newEntry = useSelector((state) => state.newEntry);
  const modalButtonRef = useRef(null);

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
  };

  return (
    <>
      <button className='primary-btn primary-btn-green' type='button' ref={modalButtonRef} onClick={() => {setShow(true), dispatch(resetMoodAndSymptoms())}}> + Symptoms and Moods</button>
      <GlobalModal buttonRef={modalButtonRef} show={show} onClose={() => setShow(false)} title="Select Moods and Symptoms" footer={<button className='primary-btn submit-btn' style={{padding:'0.3rem 0.7rem'}} onClick={handleAdd}>Add</button>}>
        <h3>Symptoms</h3>
        <div className="scroll symptoms-holder">
          <Checkbox
            checkboxIcon='symptoms-mood-icons/sore-breasts.png'
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
            checkboxIcon='symptoms-mood-icons/fatigue.png'
            checkboxTitle='Fatigue'
            CheckboxId='fatigue'
            handleChange={handleSymptomChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/cravings.png'
            checkboxTitle='Cravings'
            CheckboxId='cravings'
            handleChange={handleSymptomChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/mood-swings.png'
            checkboxTitle='Mood Swings'
            CheckboxId='mood-swings'
            handleChange={handleSymptomChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/headache.png'
            checkboxTitle='Headache'
            CheckboxId='headache'
            handleChange={handleSymptomChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/constipation.png'
            checkboxTitle='Constipation'
            CheckboxId='constipation'
            handleChange={handleSymptomChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/dizziness.png'
            checkboxTitle='Dizziness'
            CheckboxId='dizziness'
            handleChange={handleSymptomChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/discharge.png'
            checkboxTitle='Discharge'
            CheckboxId='discharge'
            handleChange={handleSymptomChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/backache.png'
            checkboxTitle='Backache'
            CheckboxId='backache'
            handleChange={handleSymptomChange}
          />
        </div>
        <i className="fa-solid fa-caret-down"></i>
        <h3>Moods</h3>
        <div className="scroll moods-holder">
          <Checkbox
            checkboxIcon='symptoms-mood-icons/happy.png'
            checkboxTitle='Happy'
            CheckboxId='happy'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/sad.png'
            checkboxTitle='Sad'
            CheckboxId='sad'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/excited.png'
            checkboxTitle='Excited'
            CheckboxId='excited'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/angry.png'
            checkboxTitle='Angry'
            CheckboxId='angry'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/anxious.png'
            checkboxTitle='Anxious'
            CheckboxId='anxious'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/content.png'
            checkboxTitle='Content'
            CheckboxId='content'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/stressed.png'
            checkboxTitle='Stressed'
            CheckboxId='stressed'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/calm.png'
            checkboxTitle='Calm'
            CheckboxId='calm'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/frustrated.png'
            checkboxTitle='Frustrated'
            CheckboxId='frustrated'
            handleChange={handleMoodChange}
          />
          <Checkbox
            checkboxIcon='symptoms-mood-icons/energetic.png'
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