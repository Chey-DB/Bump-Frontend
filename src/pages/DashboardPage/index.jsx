import React from 'react'
import './styles.css'
import MotivationalQuote from '../../components/MotivationalQuote'
import ProgressBar from '../../components/ProgressBar'
import { Greeting, InformationCard } from '../../components'
// import Checklist from '../../components/Checklist' 

const DashboardPage = () => {

    const user = {
        dueDate: new Date('2023-12-31'),
        currentWeek: 11,
    }

  return (
    <>
    <div className='container'>
      {/* <Checklist /> */}
      <div>
        <Greeting/>
      </div>
      <br />
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste, fugiat neque quod ipsa error alias totam dolorum sapiente explicabo?</h3>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quaerat cumque et id sapiente accusantium commodi earum cupiditate exercitationem impedit veritatis natus pariatur repellendus odit nostrum at aut aspernatur. Perferendis!</p>
      <div >
        <MotivationalQuote />
      </div>
      <div>
        <ProgressBar dueDate={user.dueDate} currentWeek={user.currentWeek} />
      </div>
      <div>
        <InformationCard />
      </div>
    </div>
    </>
  )
}

export default DashboardPage
