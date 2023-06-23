import React from 'react'

import './DateCalendarIcon.css'

const DateCalendarIcon = (props) => {
  return (
    <div className='date-cld-icon'>
      <p className='date-cld-weekday'>{props.dayOfWeek}</p>
      <p className='date-cld-month'>{props.dayOfMonth}</p>
    </div>
  )
}

export default DateCalendarIcon