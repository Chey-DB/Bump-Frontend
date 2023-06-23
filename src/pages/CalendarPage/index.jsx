import React from 'react'
import Calendar from '../../components/Calendar';
import NewEventButton from "../../components/Calendar/NewEventButton";


const CalendarPage = () => {
  return (
    <> 
       
       <div className="container_1">
          <NewEventButton /> 
          <Calendar />
      </div>
     </>
  )
}

export default CalendarPage
