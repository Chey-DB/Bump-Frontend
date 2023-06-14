import { Routes, Route } from 'react-router-dom'

import * as Pages from './pages'
import Header from './components/Header'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/register" element={<Pages.RegisterPage />} />
        <Route path="/login" element={<Pages.LoginPage />} />
        <Route path="/dashboard" element={<Pages.DashboardPage />} />
        <Route path="/calendar" element={<Pages.DashboardPage />} />
        <Route path="/my-journal" element={<Pages.DashboardPage />} />
        <Route path="/community" element={<Pages.DashboardPage />} />
        <Route path="/faqs" element={<Pages.DashboardPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
