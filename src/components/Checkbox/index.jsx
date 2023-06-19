import React from 'react';
import './Checkbox.css';

const Checkbox = ({ checkboxIcon, checkboxTitle, CheckboxId, handleChange }) => {
  

  return (
    <div className="checkbox-wrapper-16 sc-item">
      <label className="checkbox-wrapper">
        <span className="checkbox-label">{checkboxTitle}</span>
        <input
          type="checkbox"
          className="checkbox-input"
          id={CheckboxId}
          onChange={handleChange} // Add the onChange event handler
        />
        <span className="checkbox-tile">
          <span className="checkbox-icon">
            <img src={checkboxIcon} alt="" style={{ width: '2rem' }} />
          </span>
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
