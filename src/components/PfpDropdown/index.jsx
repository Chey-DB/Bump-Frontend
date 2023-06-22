import React from 'react'

import './PfpDropdown.css'

const PfpDropdown = ({settingToggle}) => {
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
      <button className='primary-btn red-btn'>Logout</button>
    </div>
  )
}

export default PfpDropdown