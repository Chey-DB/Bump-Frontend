import { Routes, Route } from 'react-router-dom'


import * as Pages from './pages'
// import Header from './components/Header'
import LoggedNav from './components/LoggedNav'
// import NavBar from './components/Navbar'

import "./App.css"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoggedNav />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/register" element={<Pages.RegisterPage />} />
        <Route path="/login" element={<Pages.LoginPage />} />
        <Route path="/dashboard" element={<Pages.DashboardPage />} />
        <Route path="/calendar" element={<Pages.CalendarPage />} />
        <Route path="/my-journal" element={<Pages.MyJournalPage />} />
        <Route path="/community" element={<Pages.CommunityPage />} />
        <Route path="/faqs" element={<Pages.FAQsPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
