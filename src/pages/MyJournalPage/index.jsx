import React, { useState } from 'react'
import './styles.css'
import { JournalForm, GlobalModal, SymptomMoodPicker } from '../../components'
const MyJournalPage = () => {
  const [show, setShow] = useState(false)
  
  return (
    <>
    <div className='container'>
      <h1>My Journal Page</h1>
      <h2>This is something</h2>
      <br />
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste, fugiat neque quod ipsa error alias totam dolorum sapiente explicabo?</h3>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quaerat cumque et id sapiente accusantium commodi earum cupiditate exercitationem impedit veritatis natus pariatur repellendus odit nostrum at aut aspernatur. Perferendis!</p>
      <div className='button-div'>
        <button>Press Me</button>
      </div>
      <JournalForm />
      <button onClick={() => setShow(true)}>Add Symptoms and Moods</button>
      <GlobalModal show={show} onClose={() => setShow(false)} title='Select Moods and Symptoms'>
        <SymptomMoodPicker />
      </GlobalModal>
    </div>
    </>
  )
}

export default MyJournalPage
