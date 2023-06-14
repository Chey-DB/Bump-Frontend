import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './styles.css'

const Header = () => {
  return (
    <main>
      <header>
      <Link to="/"><img src="" alt="logo" /></Link>
        <h1>Bump</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </main>
  )
}

export default Header
