import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../Context';

import './PfpDropdown.css'

const PfpDropdown = ({settingToggle}) => {
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const logout = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/logout', { withCredentials: true });
      console.log(response)
      if (response.status === 200) {
        setUser({})
        navigate('/');
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (err) {
      console.error('An error occurred while trying to log out:', err);
    }
  };

  return (
    <div className='pfp-options-dd' style={{ right: settingToggle ? '0' : '-500px' }}>
      <div className='manage-account-holder'>
        <div className='dd-userInfo-holder'>
          <img id='pfp' src="blank-profile-picture.webp" alt="profile picture" />
          <div>
            <p>Username</p>
            <p>username@mail.com</p>
          </div>
        </div>
        <button className='primary-btn submit-btn'>Settings</button>
      </div>
      <button className='primary-btn red-btn' onClick={logout}>Logout</button>
    </div>
  )
}

export default PfpDropdown