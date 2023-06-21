import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import { deleteEventDispatch } from "../Calendar/actions/actionCreatorDispatch";
import NewEventButton from "./NewEventButton";
import { editEventSidebarObj, setDayDetailObj, toggleDetailSidebarObj, toggleNewEventSidebarObj } from "../Calendar/actions/actionCreatorObj";
import moment from 'moment';
import axios from 'axios';
import {useAuth} from '../../Context/index'


const DayDetail = () => {
  
  const calendarContext = useSelector(state => state.calendarState);
  const dispatch = useDispatch();
  // const {user} = useAuth();
  // const [events, setEvents] = useState([]);

  const {
    detailSidebarToggled,
    dayDetail,
    currentMonth,
    currentYear,
  } = calendarContext;
  
  const fullEvent = (el) => {
    el.classList.toggle('active')
  }

  // useEffect(() => {
  // const handleEvents = async() => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/calendar/user/${user.userId}`, { withCredentials: true })
  //     setEvents(response.data);
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
  // handleEvents();
  // }, [])

  return (
    <div
    className={
      detailSidebarToggled
      ? "detail-sidebar toggled box-shadow"
      : "detail-sidebar"
    }
    style={{
      top: window.scrollY
    }}
    >
      <button
        className="sidebar__close-btn_toggled"
        onClick={() => {
          dispatch(toggleDetailSidebarObj(false));
          dispatch(toggleNewEventSidebarObj(false));
        }}
        >
        <i className="fas fa-times-circle"></i>
      </button>
      <p className="detail-sidebar__date">{`${moment.months(currentMonth - 1)} ${dayDetail.today}, ${currentYear}`}</p>
      <ul className="detail-sidebar__events">
        {dayDetail.events.map(event => (
          <li
          className="event-item"
          onClick={(e) => fullEvent(e.target)}
          key={event.id + event.name}>
            {event.title}
            <button
              className="delete-event-btn"
              onClick={() => {
                dispatch(deleteEventDispatch(calendarContext, event.id));
                dispatch(setDayDetailObj(
                  dayDetail.today,
                  dayDetail.events.filter(e => e.id !== event.id)
                  ));
                }}
                >
              <i className="fas fa-trash"></i>
            </button>
            <button
              className="edit-event-btn"
              onClick={() => {
                dispatch(toggleNewEventSidebarObj(true));
                dispatch(toggleDetailSidebarObj(false))
                dispatch(editEventSidebarObj(event))
              }}
              >
              <i className="fas fa-edit"></i>
            </button>
            {/* <p className="event-date"><span className="text-bold">Date: </span>{event.date}</p> */}
            <p className="event-time"><span className="text-bold">Time: </span>{event.time}</p>
            <p className="event-title"><span className="text-bold">Event Name: </span> {event.title}</p>
            <p className="event-description"><span className="text-bold">Description: </span>{event.description}</p>
          </li>
        ))}
      </ul>

      <NewEventButton date={event.today} />
    </div>
  );
};

export default DayDetail;
