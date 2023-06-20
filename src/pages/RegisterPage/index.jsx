import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles.css'
import { useAuth } from '../../Context/'

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
    window.open('http://localhost:3000/auth/google', '_self')
  }
    
  console.log(document.cookie)
  return (
    <div className='container'>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <form action="POST">
        <label htmlFor="username">Username:</label>
        <input onChange={handleUsernameChange}type="text" name="username" id="username" placeholder="Username" />
        <label htmlFor="password">Password:</label>
        <input onChange={handlePasswordChange}type="password" name="password" id="password" placeholder="Password" />
        {/* <label htmlFor="confirmPassword">Password (confirm):</label>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" /> */}
        <button type="submit" onClick={handleRegister}>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
