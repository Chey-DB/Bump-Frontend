import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context'

import './styles.css'

const HomePage = () => {

  const { user, setUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [])

  const handleTestLogin = () => {
    const userId = '6488473bfa7d92ab51dfef3f'
    const username = 'test'

    setUser({ userId, username })
    navigate('/dashboard')
  }

  return (
    <>
      <div id='home-page-container'>
        <div className='hero-banner'>
          <div className='hp-logo-box'>
            <img src="Bump-logo.png" alt="" id='hp-logo'/>
          </div>
          <h1 className='hp-heading'>
            <span className='hp-heading-main'>Bump</span>
            <span className='hp-heading-sub'>Path to Parenthood</span>
          </h1>
        </div>
        {/* <div className='container'>
        </div> */}
      <button onClick={handleTestLogin}>Press Me</button>
      </div>
    </>
  )
}

export default HomePage
