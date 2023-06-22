import React from "react";
import axios from "axios";
import { useAuth } from "../../Context";
import { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const LoadingPage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/checkUser", { withCredentials: true })
      .then((response) => {
        const userId = response.data._id;
        const username = response.data.username;
        if (response.data) {
          setUser({ userId, username });
          navigate("/settings");
          console.log(response.data);
        } else {
          console.log("User is not logged in");
        }
      });
  }, []);

  return (
    <div>
      LoadingPage
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default LoadingPage;
