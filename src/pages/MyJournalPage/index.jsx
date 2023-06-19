import React, { useState, useEffect } from 'react'
import './styles.css'
import { JournalForm, GlobalModal, SymptomMoodPicker } from '../../components'

import './styles.css'
const MyJournalPage = () => {
  
  
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
    </div>
    </>
  )
}

export default MyJournalPage
