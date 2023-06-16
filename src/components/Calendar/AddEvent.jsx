import React, {useState} from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import DateTimePicker from 'react-datetime-picker';
Modal.setAppElement('#root')

const AddEvent = ({isOpen, onClose, onEventAdded}) => {
    
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }

    return(
        <>
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                <br/>
                <br/>
                <br/>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Start Date</label>
                        <Datetime value={start} onChange={date => setStart(date)}/>
                    
                        <label>End Date</label>
                        <Datetime value={end} onChange={date => setEnd(date)}/>
                    </div>
                    <input placeholder='title' value={title} onChange={e => setTitle(e.target.value)}/>
                    <button>Add Event</button>
                </form>

            </Modal>
        </>
    )

}

export default AddEvent;
