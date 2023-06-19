import React from 'react'
import axios from 'axios'
import { useAuth } from '../../Context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const LoadingPage = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/auth/checkUser', { withCredentials: true })
            .then(response => {
                const userId = response.data._id
                const username = response.data.username
                if (response.data) {
                    setUser({ userId, username })
                    navigate('/dashboard')
                    // User is logged in
                    // Use the user data
                    console.log(response.data);
                } else {
                    // User is not logged in
                    console.log("User is not logged in");
                }
            });
    }, [])

  return (
    <div>LoadingPage</div>
  )
}

export default LoadingPage
