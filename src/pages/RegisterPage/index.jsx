import React from 'react'
import './styles.css'

const RegisterPage = () => {
  const handleGoogleSignIn = () => {
    window.open('http://localhost:3000/auth/google', '_self')
    console.log()

  }
  
  console.log(document.cookie)
  return (
    <div className='container'>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <form action="POST">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" placeholder="Username" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" />
        <label htmlFor="confirmPassword">Password (confirm):</label>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
