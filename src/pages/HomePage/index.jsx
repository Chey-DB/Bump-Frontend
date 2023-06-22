import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../Context'

import './styles.css'

const HomePage = () => {

  const { user, setUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user.userId) {
      navigate('/dashboard')
    }
  }, [user])

  return (
    <>
      <div id='home-page-container'>

        <div className='hero-banner'>
          <div className='hp-logo-box'>
            <img src="Bump-logo.png" alt="" id='hp-logo' />
          </div>
          <Link to='/login' id='signin-btn' className='hp-link'>Login</Link>

          <div className='hp-text-box'>
            <h1 className='hp-heading'>
              <span className='hp-heading-main'>Bump</span>
              <span className='hp-heading-sub'>Path to Parenthood</span>
            </h1>
            <div>
              <Link to='/register'>
                <button className='green hp-info-btn'>Join the Community</button>
              </Link>
            </div>
            <a id='discover-link' className='hp-link'>Discover More</a>
          </div>
        </div>

        <div className="hp-mid-section">

        </div>
        <div className='hp-end-section'>

        </div>
      </div>
    </>
  )
}

export default HomePage
