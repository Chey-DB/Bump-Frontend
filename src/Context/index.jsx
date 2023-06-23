import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://bump-backend.onrender.com/auth/checkUser", {
        withCredentials: true,
      })
      .then((response) => {
        const userId = response.data._id;
        const username = response.data.username;
        if (response.data) {
          setUser({ userId, username });
        } else {
          console.log("User is not logged in");
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
