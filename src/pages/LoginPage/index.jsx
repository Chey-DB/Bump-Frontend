import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/";
import googleIcon from "./google.png";
import "./styles.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://bump-backend.onrender.com/local-users/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setUser({ username: response.data.username, id: response.data.id });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleSignIn = () => {
    window.open("https://bump-backend.onrender.com/auth/google", "_self");
  };

  console.log(document.cookie);
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="Bump-logo.png" alt="bump logo" id="login-bump-logo" />
      </div>
      <h2 className="login-heading">Welcome Back!</h2>
      <button onClick={handleGoogleSignIn} className="login-google-button">
        <img src={googleIcon} alt="Google Icon" className="login-google-icon" />
        Google
      </button>
      <div className="login-divider-line">
        <hr className="login-left-line" />
        <span className="login-or-text">Or with username and password</span>
        <hr className="login-right-line" />
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="username" className="login-label">
          Username:
        </label>
        <input
          onChange={handleUsernameChange}
          type="text"
          name="username"
          id="login-username"
          placeholder="Username"
          className="login-input"
        />
        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id="login-password"
          placeholder="Password"
          className="login-input"
        />
        <div>
          <span>Join The Community? </span>
          <Link to="/register" className="register-signin-link">
            Register Here
          </Link>
        </div>
        <button type="submit" className="login-submit-button">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
