import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


import * as Pages from './pages'

import { ProtectedRouteWrapper, LoggedNav } from './components'

import "./App.css"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get('hhtp://localhost:3000/auth/checkUser', { withCredentials: true });
        setLoggedIn(res.data.loggedIn);
      } catch (err) {
        console.error(err);
      }
    };

    checkUser();
  }, []);

  console.log(document.cookie)

  return (
    <Routes>
      <Route path="/" element={<LoggedNav />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/register" element={<Pages.RegisterPage />} />
        <Route path="/login" element={<Pages.LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRouteWrapper loggedIn={loggedIn}><Pages.DashboardPage /></ProtectedRouteWrapper>} />
        <Route path="/calendar" element={<ProtectedRouteWrapper loggedIn={loggedIn}><Pages.CalendarPage /></ProtectedRouteWrapper>} />
        <Route path="/my-journal" element={<ProtectedRouteWrapper loggedIn={loggedIn}><Pages.MyJournalPage /></ProtectedRouteWrapper>} />
        <Route path="/community" element={<ProtectedRouteWrapper loggedIn={loggedIn}><Pages.CommunityPage /></ProtectedRouteWrapper>} />
        <Route path="/faqs" element={<ProtectedRouteWrapper loggedIn={loggedIn}><Pages.FAQsPage /></ProtectedRouteWrapper>} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
