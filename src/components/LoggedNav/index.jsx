import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import axios from 'axios'

import './LoggedNav.css'
import {Checklist, PfpDropdown} from '..'

const LoggedNav = () => {
  const [profilePicture, setProfilePicture] = useState('')
  const [click, setClick] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [settingsToggle, setSettingsToggle] = useState(false);

  const buttonPress = () => {
    setToggle(!toggle);
  };

  const settingButtonPress = () => {
    setSettingsToggle(!settingsToggle);
  };

  const handleClick = () => setClick(!click);

  // useEffect(() => {
  //   const getProfilePicture = async () => {
  //     try {
  //       const response = await axios.get(`/users/`);
  //       setProfilePicture(response.data.profilePic);
  //     } catch (error) {
  //       console.error('Error fetching ProfilePicture:', error);
  //     }
  //   };

  //   getProfilePicture();
  // }, []);


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo-holder">
            <div onClick={buttonPress} id='checklist-toggler'>
              <i className={toggle ? "fas fa-times" : "fas fa-list-check"}></i>
            </div>
            <Checklist toggle={toggle} />
            <NavLink to="/" className='nav-logo'>
              <img src="Bump-logo.png" alt="bump logo" id='navbar-logo-img' />
            </NavLink>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-links" onClick={handleClick}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/calendar" className="nav-links" onClick={handleClick}>
                Calendar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/community" className="nav-links" onClick={handleClick}>
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/my-journal" className="nav-links" onClick={handleClick}>
                My Journal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faqs" className="nav-links" onClick={handleClick}>
                FAQs
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} style={{ transform: 'translateY(5px)' }}></i>
          </div>
          <img onClick={settingButtonPress} id='pfp' src={profilePicture ? profilePicture : "blank-profile-picture.webp"} alt="profile picture" />
          <PfpDropdown settingToggle={settingsToggle} />
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default LoggedNav
