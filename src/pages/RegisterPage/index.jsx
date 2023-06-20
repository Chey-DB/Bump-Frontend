import React from 'react';
import './styles.css';
import googleIcon from './google.png';

const RegisterPage = () => {
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
        <input type="text" name="username" id="register-username" placeholder="Username" className="register-input" />
        <label htmlFor="password" className="register-label">Password:</label>
        <input type="password" name="password" id="register-password" placeholder="Password" className="register-input" />
        <label htmlFor="confirmPassword" className="register-label">Password (confirm):</label>
        <input type="password" name="confirmPassword" id="register-confirmPassword" placeholder="Confirm Password" className="register-input" />
        <button type="submit" className="register-submit-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;