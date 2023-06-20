import React, { useState, useEffect } from 'react'
import './styles.css'
import { JournalForm, JournalPosts } from '../../components'

import './styles.css'
const MyJournalPage = () => {


  return (
    <>
      <div className='container'>
        <JournalForm />
        <div>
          <h2>My Journal Entries</h2>
          <JournalPosts />
        </div>
      </div>
    </>
  )
}

export default MyJournalPage
