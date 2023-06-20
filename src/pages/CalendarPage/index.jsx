import React from 'react'
import Calendar from '../../components/Calendar';
import './styles.css'
import NewEventButton from "../../components/Calendar/NewEventButton";


const CalendarPage = () => {
  return (
    <>
      <div className='container'>
        <NewEventButton />
        <div className="container">
          <Calendar />
        </div>
      </div>
    </>
  )
}

export default CalendarPage
