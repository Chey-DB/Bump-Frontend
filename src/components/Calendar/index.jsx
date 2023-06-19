// import React, {useState, useRef} from 'react';
// import axios from 'axios';
// import FullCalendar from '@fullcalendar/react' ;
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridplugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import AddEvent from './AddEvent';
// import moment from 'moment';
// import './styles.css'


// const Calendar = () => {

//   const [modalOpen, setModalOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const calendarRef = useRef(null);

//   const onEventAdded = event => {
//     let calendarApi = calendarRef.current.getApi();
//     calendarApi.addEvent({
//       start: moment(event.start).toDate(),
//       end: moment(event.end).toDate(),
//       title: event.title
//     });
//   };

//   const handleEventAdd = async(data) => {
//     await axios.post('http://localhost:3000/calendar', data.event)
//   }

//   const handleDatesSet = async (data) => {
//     const response = await axios.get('http://localhost:3000/calendar?start='+moment(data.start).toISOString()+'&end='+moment(data.end).toISOString() )
//     setEvents(response.data)
//   }

//   return (
//     <section>
//       <button onClick={() => setModalOpen(true)}>Add Event</button>
//       <div style={{position:"relative", zIndex: 0}}>
//         <FullCalendar
//           ref={calendarRef}
//           events={events}
//           plugins={[ dayGridPlugin]}
//           initialView={"dayGridMonth"}
//           eventAdd={event => handleEventAdd(event)}
//           datesSet={(date) => handleDatesSet(date)}
//         />
//       </div>

//       <AddEvent 
//         isOpen={modalOpen} 
//         onClose={() => setModalOpen(false)} 
//         onEventAdded={(event) => onEventAdded(event)}
//       />
//     </section>
//   )
// }

// export default Calendar

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Page, Eventcalendar, getJson, Toast } from '@mobiscroll/react-lite';

// const Calendar = () => {

//     const [myEvents, setEvents] = useState([]);
//     const [isToastOpen, setToastOpen] = useState(false);
//     const [toastText, setToastText] = useState("");

//     useEffect(() => {
//         getJson('http://localhost:3000/calendar', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);
    
//     const closeToast = React.useCallback(() => {
//         setToastOpen(false);
//     }, []); 
    
//     const onEventClick = React.useCallback((event) => {
//         setToastText(event.event.title);
//         setToastOpen(true);
//     }, []);
    
//     const view = React.useMemo(() => {
//         return {
//             calendar: { labels: true }
//         };
//     }, []);

//     return(
//       <div>
//         <Eventcalendar
//           theme="ios" 
//           themeVariant="light"
//           clickToCreate={false}
//           dragToCreate={false}
//           dragToMove={false}
//           dragToResize={false}
//           eventDelete={false}
//           data={myEvents}
//           view={view}
//           onEventClick={onEventClick}
//        />
//         <Toast 
//           message={toastText}
//           isOpen={isToastOpen}
//           onClose={closeToast}
//     	  />
//       </div>
//     )
// };

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Day from "./Day";
import DayDetail from "./DayDetail";
import NewEventSidebar from "./NewEventSidebar";
import Buttons from "./Buttons";
import { getCurrentDateDispatch, getEventsFromLS } from "../Calendar/actions/actionCreatorDispatch"
import moment from 'moment';

const Calendar = () => {
  const body = document.getElementsByTagName("body");
  const dispatch = useDispatch();
  const calendarContext = useSelector(state => state.calendarState);

  const {
    currentMonth,
    currentYear,
    days,
    detailSidebarToggled,
    eventsSidebarToggled,
    newEventSidebarToggled,
    editEventSidebarToggled,
  } = calendarContext;



  useEffect(() => {
    dispatch(getCurrentDateDispatch(moment().year(), moment().month() + 1, moment().date()));
    dispatch(getEventsFromLS());
  }, [dispatch]);

  if (
    detailSidebarToggled ||
    eventsSidebarToggled ||
    newEventSidebarToggled ||
    editEventSidebarToggled
  ) {
    body[0].style.overflowY = "hidden";
  } else {
    body[0].style.overflowY = "visible";
  }

  return (
    <div className="calendar">
      <div className="title">
        {moment.months(currentMonth - 1)} {currentYear}{" "}
        <Buttons />
      </div>
      <div className="calendar-table">
        <div className="thead">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        <div className="thead-sm">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>Th</div>
          <div>F</div>
          <div>St</div>
          <div>S</div>
        </div>
        <div className="tbody">
          {days.map((day, index) => (
            <Day key={index} day={day} />
          ))}
        </div>
      </div>
      <DayDetail />
      <NewEventSidebar />
    </div>
  );
};

export default Calendar;
