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
            <img src="Bump-logo.png" alt="" id='hp-logo' />
          </div>
          <a type='button' id='signin-btn'>Login</a>

          <div className='hp-text-box'>
            <h1 className='hp-heading'>
              <span className='hp-heading-main'>Bump</span>
              <span className='hp-heading-sub'>Path to Parenthood</span>
            </h1>
            <div>
              <Link to='/register'>
                <button onClick={handleTestLogin} className='btn green hp-info-btn'>Join the Community</button>
              </Link>
            </div>
            <a id='discover-link'>Discover More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
