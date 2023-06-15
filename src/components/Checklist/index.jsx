import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './styles.css'

const Checklist = () => {
  const [checklist, setChecklist] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    const getChecklist = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/checklists/user/${user}`);
        console.log(response);
        setChecklist(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (user) {
      getChecklist();
    }
  }, [user]);

  useEffect(() => {
    setUser('6488473bfa7d92ab51dfef3f');
  }, []);

  const handleCheckboxChange = (itemId) => {
    setChecklist((prevChecklist) => {
      return prevChecklist.map((item) => {
        if (item._id === itemId) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    });
  };

  return (
    <div id="checklist">
      {checklist.map((item) => (
        <div key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => handleCheckboxChange(item._id)}
          />
        </div>
      ))}
    </div>
  );
};


export default Checklist