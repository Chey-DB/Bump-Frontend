import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context'

import './styles.css'

const HomePage = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const handleTestLogin = () => {
    const userId = '6488473bfa7d92ab51dfef3f'
    const username = 'test'

    setUser({userId, username})
    navigate('/dashboard')
  }

  return (
    <>
    <div className='container'>
      <h1>Home Page</h1>
      <h2>This is something</h2>
      <br />
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste, fugiat neque quod ipsa error alias totam dolorum sapiente explicabo?</h3>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quaerat cumque et id sapiente accusantium commodi earum cupiditate exercitationem impedit veritatis natus pariatur repellendus odit nostrum at aut aspernatur. Perferendis!</p>
      <div className='button-div'>
        <button onClick={handleTestLogin}>Press Me</button>
      </div>
    </div>
    </>
  )
}

export default HomePage
