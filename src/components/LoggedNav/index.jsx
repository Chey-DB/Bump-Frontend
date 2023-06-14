import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './styles.css'

const LoggedNav = () => {
  return (
    <>
      <header>
        <nav>
          <div className="branding">
            <Link to="/"><img src="" alt="logo" /></Link>
            <h1 id='navbar-name'>Bump</h1>
          </div>
          <ul id='nav-list'>
            <li><Link to="/dashboard">Dashbaord</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/my-journal">My Journal</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
          <Link to="/"><img src="" alt="profile picture" /></Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default LoggedNav
