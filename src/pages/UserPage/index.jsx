import React, { useState } from 'react';
import {SettingsForm, UserInformation, LoggedNav } from '../../components';
import './styles.css'; 

const profilePicture = localStorage.getItem('profilePicture');

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className='container'>
        <div className='pic-form'>
            <div>
                <img id='picture' src={profilePicture ? profilePicture : "blank-profile-picture.webp"} alt="profile picture" />
            </div>
        <SettingsForm onFormSubmit={handleFormSubmit} />
        {userData && <UserInformation userData={userData} />}
         </div>
    </div>
    
  );
};

export default UserPage;