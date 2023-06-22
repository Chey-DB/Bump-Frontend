import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { response } from 'msw';

import { useAuth } from '../../Context';

const NextAppointment = () => {
  const [appointment, setAppointment] = useState(null);
  const [data, setData] = useState(["20/05/2023", "20/05/2021", "20/05/2022"])
  const { user } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/calendar/user/${user.userId}`, { withCredentials: true })
        setData(response.data)

      } catch (error) {
        console.log(error.message)
      }
    }

    getData()
  }, []);

  useEffect(() => {
    const getUpcommingDate = () => {
      const now = new Date();

      const futureData = data.filter((item) => new Date(`${item.date}T${item.time}:00`) >= now);

      const nextAppointment = futureData.reduce((closest, current) => {
        const currentDateTime = new Date(`${current.date}T${current.time}:00`);
        const closestDateTime = new Date(`${closest.date}T${closest.time}:00`);

        const currentDiff = Math.abs(currentDateTime - now);
        const closestDiff = Math.abs(closestDateTime - now);

        return currentDiff < closestDiff ? current : closest;
      });

      setAppointment(nextAppointment)
    }
    if(data.length > 0){
      getUpcommingDate()
    }
  }, [data])


  return (
    <div className="next-appointment-wrapper">
      {appointment ? (
        <div className="next-appointment-container">
          <div className="next-appointment">
            <h3>Next Appointment:</h3>
            <h2>{appointment.title}</h2>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Description: {appointment.description}</p>
          </div>
        </div>
      ) : (
        <p>No upcoming appointments</p>
      )}
    </div>
  );
};

export default NextAppointment;
