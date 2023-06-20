import React, { useEffect, useState } from 'react';
import './styles.css';

const NextAppointment = () => {
    const [appointment, setAppointment] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:3000/calendar/:id')
        .then(response => response.json())
        .then(data => {
          // Assuming the appointments are sorted by start time
          const nextAppointment = data.find(appointment => new Date(appointment.start) > new Date());
          setAppointment(nextAppointment);
        })
        .catch(error => {
          console.log('Error retrieving appointments:', error);
        });
    }, []);
  
    return (
      <div className="next-appointment-wrapper">
        {appointment ? (
          <div className="next-appointment-container">
            <div className="next-appointment">
              <h3>Next Appointment:</h3>
              <p>Start: {appointment.start}</p>
              <p>End: {appointment.end}</p>
              <p>Title: {appointment.title}</p>
            </div>
          </div>
        ) : (
          <p>No upcoming appointments</p>
        )}
      </div>
    );
  };
  
  export default NextAppointment;
  