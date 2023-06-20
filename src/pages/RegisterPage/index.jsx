import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles.css'
import { useAuth } from '../../Context/'
import googleIcon from './google.png';

const RegisterPage = () => {
  const navigate = useNavigate()
  const { user, setUser } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    console.log('Registering')
    e.preventDefault()
    axios.post('http://localhost:3000/local-users/register', {      
      username,
      password     
    }, { withCredentials: true })
      .then(response => {
        setUser({ username: response.data.username, id: response.data.id })
        console.log(response)
        // if (response.data) {
          navigate('/dashboard')
        // } else {
        //   console.log('Register failed')
      //   }
      })
      .catch(error => {
        console.log(error)
      }
    )
  }


  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }



  const handleGoogleSignIn = () => {
    window.open('http://localhost:3000/auth/google', '_self');
  };

  console.log(document.cookie);
  return (
    <div className='register-container'>
      <div className='register-logo'>
        <img src="Bump-logo.png" alt="bump logo" id="register-bump-logo" />
      </div>
      <h2 className="register-heading">Create your account</h2>
      <button onClick={handleGoogleSignIn} className="register-google-button">
        <img src={googleIcon} alt="Google Icon" className="register-google-icon" />
        Google
      </button>
      <div className="register-divider-line">
        <hr className="register-left-line" />
        <span className="register-or-text">Or with username and password</span>
        <hr className="register-right-line" />
      </div>
      <form action="POST" className="register-form">
        <label htmlFor="username" className="register-label">Username:</label>
        <input onChange={handleUsernameChange}type="text" name="username" id="register-username" placeholder="Username" className="register-input" />
        <label htmlFor="password" className="register-label">Password:</label>
        <input onChange={handlePasswordChange}type="password" name="password" id="register-password" placeholder="Password" className="register-input" />
        <button onClick={handleRegister} type="submit" className="register-submit-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
