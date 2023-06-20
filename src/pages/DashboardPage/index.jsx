import React from 'react'
import './styles.css'
import MotivationalQuote from '../../components/MotivationalQuote'
import ProgressBar from '../../components/ProgressBar'
import { Greeting, InformationCard, NextAppointment } from '../../components'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const DashboardPage = () => {
  const navigate = useNavigate();

  const user = {
    dueDate: new Date("2023-12-31"),
    currentWeek: 35,
  };

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/logout");
      if (response.status === 200) {
        navigate("/login");
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (err) {
      console.error("An error occurred while trying to log out:", err);
    }
  };

  return (
    <>
    <div className='container'>
      {/* <Checklist /> */}
      <div>
        <Greeting/>
      </div>
      <div>
        <NextAppointment />
      </div>
      <div >
        <MotivationalQuote />
      </div>
      <div>
        <ProgressBar dueDate={user.dueDate} currentWeek={user.currentWeek} />
      </div>
        <InformationCard />
    </div>
    </>
  );
};

export default DashboardPage;
