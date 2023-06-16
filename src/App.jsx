import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context";
import ProtectedRoute from "./Route";

import * as Pages from "./pages";
// import Header from './components/Header'
import LoggedNav from "./components/LoggedNav";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Pages.HomePage />} />
        <Route path="/register" element={<Pages.RegisterPage />} />
        <Route path="/login" element={<Pages.LoginPage />} />
        <Route path="/loading" element={<Pages.LoadingPage />} />
        <Route path="/" element={<ProtectedRoute redirectTo="/" />}>
          <Route path="/" element={<LoggedNav />}>
            <Route path="/dashboard" element={<Pages.DashboardPage />} />
            <Route path="/calendar" element={<Pages.CalendarPage />} />
            <Route path="/my-journal" element={<Pages.MyJournalPage />} />
            <Route path="/community" element={<Pages.CommunityPage />} />
            <Route path="/faqs" element={<Pages.FAQsPage />} />
          </Route>
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
