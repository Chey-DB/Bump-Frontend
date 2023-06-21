import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addEventDispatch } from "./actions/actionCreatorDispatch"
import { changeServiceField, toggleNewEventSidebarObj } from "./actions/actionCreatorObj";
import EditField from "./EditField";

const NewEventSidebar = () => {

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const calendarContext = useSelector(state => state.calendarState);
  const eventContext = useSelector(state => state.eventState);
  const dispatch = useDispatch();

  const {
    newEventSidebarToggled,
  } = calendarContext;


  const clearInputs = () => {
    setEventName("");
    setDate("");
    setTime("");
    setDescription("");
  };

  const handleChange = evt => {

    const { name, value } = evt.target;

    if (name === 'eventName') setEventName(value)
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
      <button
        className="sidebar__close-btn"
        onClick={() => {
          dispatch(toggleNewEventSidebarObj(false))
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
      <p className="new-event-sidebar__title">Add a new event</p>
      <label htmlFor="new-event-sidebar__description">Event Name</label>
      <EditField
        onEdited={handleChange}
        value={sendValue(eventContext.eventName, eventName)}
        type="text" name="eventName"
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
        type="select" name="time"
        className="new-event-sidebar__type"
        options={['', '00:00', '01:00','02:00','03:00','04:00','05:00', '06:00','07:00','08:00', '09:00','10:00','11:00', '12:00','13:00','14:00', '15:00','16:00','17:00', '18:00','19:00','20:00', '21:00','22:00','23:00']}
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
          if (eventContext.eventName === "" || eventContext.date === "") {
            return alert("Fill both of event-name and date fields.");
          } else {
            dispatch(
              addEventDispatch(
                eventContext.id,
                eventContext.eventName,
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
      >
        Add Event
      </button>
    </div>
  );
};

export default NewEventSidebar;
