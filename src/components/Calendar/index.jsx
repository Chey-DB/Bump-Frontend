import React, {useState, useRef} from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridplugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddEvent from './AddEvent';
import moment from 'moment';
import './styles.css'


const Calendar = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  const onEventAdded = event => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title
    });
  };

  const handleEventAdd = async(data) => {
    await axios.post('http://localhost:3000/calendar', data.event)
  }

  const handleDatesSet = async (data) => {
    const response = await axios.get('http://localhost:3000/calendar?start='+moment(data.start).toISOString()+'&end='+moment(data.end).toISOString() )
    setEvents(response.data)
  }

  return (
    <section>
      <button onClick={() => setModalOpen(true)}>Add Event</button>
      <div style={{position:"relative", zIndex: 0}}>
        <FullCalendar
          ref={calendarRef}
          events={events}
          plugins={[ dayGridPlugin]}
          initialView={"dayGridMonth"}
          eventAdd={event => handleEventAdd(event)}
          datesSet={(date) => handleDatesSet(date)}
        />
      </div>

      <AddEvent 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onEventAdded={(event) => onEventAdded(event)}
      />
    </section>
  )
}

export default Calendar
