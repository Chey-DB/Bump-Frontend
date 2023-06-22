import React, { useEffect, useState } from 'react';
import './styles.css';
import MotivationalQuote from '../../components/MotivationalQuote';
import ProgressBar from '../../components/ProgressBar';
import { Greeting, InformationCard, NextAppointment, SettingsForm } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettingsData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/settings/${user.userId}`, { withCredentials: true });
        console.log(response.data)
        const userData = response.data;
        if (userData) {
          setSettings({
            dueDate: userData.dueDate,
            currentWeek: userData.currentWeek,
            name: userData.name
          });
        }
      } catch (error) {
        console.error('An error occurred while fetching user settings:', error);
      }
    };

    fetchSettingsData();
  }, [user.userId]);

  return (
    <>
      <div className="container">
        {/* <Checklist /> */}
        <div>
          <Greeting name={settings?.name} />
        </div>
        <div>
          <NextAppointment />
        </div>
        <div>
          <MotivationalQuote />
        </div>
        {settings && <ProgressBar dueDate={settings.dueDate} currentWeek={settings.currentWeek} />}
         {settings && <InformationCard currentWeek={settings.currentWeek}/>} 
      </div>
    </>
  );
};

export default DashboardPage;
