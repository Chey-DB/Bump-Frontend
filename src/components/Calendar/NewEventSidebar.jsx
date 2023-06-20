import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addEventDispatch } from "./actions/actionCreatorDispatch"
import { changeServiceField, toggleNewEventSidebarObj } from "./actions/actionCreatorObj";
import EditField from "./EditField";
import axios from 'axios';

const NewEventSidebar = () => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState([]);

  const calendarContext = useSelector(state => state.calendarState);
  const eventContext = useSelector(state => state.eventState);
  const dispatch = useDispatch();

  const handleNewEvent = (e) => {
    e.preventDefault()
    const response = axios.post('http://localhost:3000/calendar', {      
      date,
      time,
      title,
      description
           
    }, { withCredentials: true })
    setUser({ date : response.date, time: response.time, title: response.title, description: response.description})
  }


  const {
    newEventSidebarToggled,
  } = calendarContext;


  const clearInputs = () => {
    setTitle("");
    setDate("");
    setTime("");
    setDescription("");
  };

  const handleChange = evt => {

    const { name, value } = evt.target;

    if (name === 'title') setTitle(value)
    if (name === 'date') setDate(value)
    if (name === 'time') setTime(value)
    if (name === 'description') setDescription(value)

    dispatch(changeServiceField(name, value));
  }

  const sendValue = (value, defaultValue) => value ? value : defaultValue;

  return (
    <div
      className={
        newEventSidebarToggled
          ? "new-event-sidebar toggled box-shadow"
          : "new-event-sidebar"
      }
      style={{
        top: window.scrollY
      }}
    >
      
      <p className="new-event-sidebar__title">Add a new event</p>
      <label htmlFor="new-event-sidebar__description">Event Name</label>
      <EditField
        onEdited={handleChange}
        value={sendValue(eventContext.title, title)}
        type="text" name="title"
        className="new-event-sidebar__description"
      />

      <label htmlFor="new-event-sidebar__date">Date</label>
      <EditField
        onEdited={handleChange}
        value={sendValue(eventContext.date, date)}
        type="date" name="date"
        className="new-event-sidebar__date"
      />

      <label htmlFor="new-event-sidebar__date">Time</label>
      <EditField
        onEdited={handleChange}
        value={sendValue(eventContext.time, time)}
        type="time" name="time"
        className="new-event-sidebar__type"
      />


      <label htmlFor="new-event-sidebar__reminder">Description</label>
      <EditField onEdited={handleChange} 
        value={sendValue(eventContext.description, description)} 
        type="text" name="description" 
        className="new-event-sidebar__description" 
      />

      <button
        className="new-event-sidebar__add-btn"
        onClick={() => {
          if (eventContext.title === "" || eventContext.date === "") {
            return alert("Fill both of event-name and date fields.");
          } else {
            dispatch(
              addEventDispatch(
                eventContext.id,
                eventContext.title,
                eventContext.date,
                eventContext.time,
                eventContext.description,
                calendarContext
              )
            );
            clearInputs();
          }
          dispatch(toggleNewEventSidebarObj(false))
        }}
        onSubmit={handleNewEvent}
      >
        Add Event
      </button>
      <button
        className="sidebar__close-btn"
        onClick={() => {
          dispatch(toggleNewEventSidebarObj(false))
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
    </div>
  );
};

export default NewEventSidebar;
