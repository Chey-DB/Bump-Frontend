import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import axios from 'axios'

import './styles.css'

const styles = ({ isActive }) => ({
  backgroundColor: isActive ? '#f5f5f5' : '',
  borderRadius: '5rem',
  padding:'0.5rem 1rem',
  transition: 'background-color 1s',
});



const LoggedNav = () => {

  const [profilePicture, setProfilePicture] = useState('')

  useEffect(() => {
    const getProfilePicture = async () => {
      try {
        const response = await axios.get(`/users/`);
        setProfilePicture(response.data.profilePic);
      } catch (error) {
        console.error('Error fetching ProfilePicture:', error);
      }
    };
  
    getProfilePicture();
  }, []);


  return (
    <>
      <header>
        <nav>
          <div className="branding">
            {/* <NavLink to="/"><img src="" alt="logo" /></NavLink> */}
            <h1 id='navbar-name'>Bump</h1>
          </div>
          <ul id='nav-list'>
            <li className='navlink'><NavLink style={styles} to="/dashboard">Dashbaord</NavLink></li>
            <li className='navlink'><NavLink style={styles} to="/calendar">Calendar</NavLink></li>
            <li className='navlink'><NavLink style={styles} to="/community">Community</NavLink></li>
            <li className='navlink'><NavLink style={styles} to="/my-journal">My Journal</NavLink></li>
            <li className='navlink'><NavLink style={styles} to="/faqs">FAQs</NavLink></li>
          </ul>
          <NavLink to="/" id='pfp-link'><img id='pfp' src={profilePicture ? profilePicture : "blank-profile-picture.webp"} alt="profile picture" /></NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default LoggedNav
