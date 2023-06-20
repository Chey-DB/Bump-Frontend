import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/auth/checkUser", {
            withCredentials: true,
        }).then((response) => {
            const userId = response.data._id;
            const username = response.data.username;
            if (response.data) {
                setUser({ userId, username });
                // User is logged in
                // Use the user data
                console.log(response.data);
            } else {
                // User is not logged in
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