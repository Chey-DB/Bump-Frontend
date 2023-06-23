import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

const Checklist = ({ toggle }) => {
  const [checklistData, setChecklistData] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getChecklist = async () => {
      try {
        const response = await axios.get(
          `https://bump-backend.onrender.com/checklists/user/${user}`
        );
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
    setUser("6488473bfa7d92ab51dfef3f"); //Currently hard coded but will be retrieving from cookies
  }, []);

  const handleCheckboxChange = async (ChecklistItemId) => {
    setChecklistData((prevChecklistData) => {
      return prevChecklistData.map((data) => {
        if (data._id === ChecklistItemId) {
          const updatedItem = { ...data, isCompleted: !data.isCompleted };
          axios
            .put(
              `https://bump-backend.onrender.com/checklists/${ChecklistItemId}`,
              updatedItem
            )
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
    <div
      id="checklist"
      data-testid="checklist"
      style={{ left: toggle ? "0" : "-100%" }}
    >
      {checklistData.map((checklistItem) => (
        <div className="checklist-item" key={checklistItem._id}>
          <div className="item-wrapper">
            <div className="cl-content-wrapper">
              <h3 className={checklistItem.isCompleted ? "completed" : ""}>
                {checklistItem.title}
              </h3>
              <p className={checklistItem.isCompleted ? "completed" : ""}>
                {checklistItem.content}
              </p>
            </div>
            <input
              type="checkbox"
              checked={checklistItem.isCompleted}
              onChange={() => handleCheckboxChange(checklistItem._id)}
              id="checkbox"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
