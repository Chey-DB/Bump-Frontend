import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PfpDropdown.css';
import { useAuth } from '../../Context';

const PfpDropdown = ({ settingToggle }) => {
  const navigate = useNavigate();
  const [pfp, setPfp] = useState('')
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

useEffect(() => {
  const getPfp = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/google-users/${user.userId}`);
      setPfp(response.data.profilePic)
      console.log(response.data.profilePic)
    } catch (err) {
      console.error('An error occurred while trying to log out:', err);
    }
  };
    
  getPfp()
  console.log(user)
}, [])

  return (
    <div className='pfp-options-dd' style={{ right: settingToggle ? '0' : '-500px' }}>
      <div className='manage-account-holder'>
        <div className='dd-userInfo-holder'>
          <img id='pfp' src={pfp} alt="profile picture" />
          <div>
            <p style={{textTransform: 'capitalize'}}>{user.username}</p>
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


