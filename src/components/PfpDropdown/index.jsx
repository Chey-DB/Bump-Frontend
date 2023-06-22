import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PfpDropdown.css';
import { useAuth } from '../../Context';

const PfpDropdown = ({ settingToggle }) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const handleSettingsClick = () => {
    navigate('/user');
  };
  
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
            <p>name</p>
            <p>username@mail.com</p>
          </div>
        </div>
        <button className='primary-btn submit-btn' onClick={handleSettingsClick}>Settings</button>
      </div>
      <button className='primary-btn red-btn' onClick={logout} >Logout</button>
    </div>
  );
};
export default PfpDropdown;


