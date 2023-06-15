import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import axios from 'axios'

import './LoggedNav.css'

const styles = ({ isActive }) => ({
  backgroundColor: isActive ? '#f5f5f5' : '',
  borderRadius: '5rem',
  padding:'0.5rem 1rem',
  color: 'black',
  transition: 'background-color 1s',
});



const LoggedNav = () => {

  const [profilePicture, setProfilePicture] = useState('')
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Bump
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/dashboard" activeClassName="active" className="nav-links" onClick={handleClick}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/calendar" activeClassName="active" className="nav-links" onClick={handleClick}>
                Calendar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/community" activeClassName="active" className="nav-links" onClick={handleClick}>
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/my-journal" activeClassName="active" className="nav-links" onClick={handleClick}>
                My Journal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faqs" activeClassName="active" className="nav-links" onClick={handleClick}>
                FAQs
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} style={{transform: 'translateY(5px)'}}></i>
          </div>
          <NavLink to="/" id='pfp-link activeClassName="active" className="nav-links" onClick={handleClick}'><img id='pfp' src="blank-profile-picture.webp" alt="profile picture" /></NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default LoggedNav
