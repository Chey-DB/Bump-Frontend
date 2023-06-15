import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.css';

const Checklist = () => {
  const [checklistData, setChecklistData] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    const getChecklist = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/checklists/user/${user}`);
        setChecklistData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (user) {
      getChecklist();
    }
  }, [user]);

  useEffect(() => {
    setUser('6488473bfa7d92ab51dfef3f'); //Currently hard coded but will be retriving from cookies
  }, []);

  const handleCheckboxChange = async (ChecklistItemId) => {
    setChecklistData((prevChecklistData) => {
      return prevChecklistData.map((data) => {
        if (data._id === ChecklistItemId) {
          const updatedItem = { ...data, isCompleted: !data.isCompleted };
          axios.put(`http://localhost:3000/checklists/${ChecklistItemId}`, updatedItem)
            .then((response) => {
              // console.log(response.data);
            })
            .catch((error) => {
              console.log(error.message);
            });
          return updatedItem;
        }
        return data;
      });
    });
  };

  return (
    <div id="checklist">
      {checklistData.map((checklistItem) => (
        <div key={checklistItem._id}>
          <h3>{checklistItem.title}</h3>
          <p>{checklistItem.content}</p>
          <input
            type="checkbox"
            checked={checklistItem.isCompleted}
            onChange={() => handleCheckboxChange(checklistItem._id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Checklist;
