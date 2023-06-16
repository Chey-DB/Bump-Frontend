import React from 'react'
import Calendar from '../../components/Calendar';
import './styles.css'


const CalendarPage = () => {
  return (
    <>
    <div className='container'>
      <Calendar />
      <h1>Calendar Page</h1>
      <h2>This is something</h2>
      <br />
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste, fugiat neque quod ipsa error alias totam dolorum sapiente explicabo?</h3>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quaerat cumque et id sapiente accusantium commodi earum cupiditate exercitationem impedit veritatis natus pariatur repellendus odit nostrum at aut aspernatur. Perferendis!</p>
      <div className='button-div'>
        <button>Press Me</button>
      </div>
      </div>
    </>
  )
}

export default CalendarPage
