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
          <div className='hp-mid-wrapper'>
            <p>Birth is something that unites all of mankind. It's such a beautiful and magical thing.
              Bump was created so that the process that leads up to birth (pregnancy) can truly be a time of joy, peace and magic.
              Pregnancy leads to the creation of life but no two pregnancies are the same. Everyone perceives it differently.
              However, many women look back on their pregnancy and don't think of it as a nice experience due to stress, anxiety and worries related to not knowing what they need to know and even as far as feeling ill-equipped to be a mother. This can often continue postpartum!
              Bump is an app created with one goal in mind. That is, ensuring that pregnant women all around the world are able to have a pleasant experience during pregnancy by receiving the support they need, when they need it, according to various needs that a pregnant woman might have.
              The way in which Bump achieves this is by....</p>
            <div className='hp-image-wrapper'>
              {/* <img src="communitiespg.png" alt="" /> */}
            </div>
          </div>
        </div>
        <div className='hp-end-section'>

        </div>
      </div>
    </>
  )
}

export default HomePage
