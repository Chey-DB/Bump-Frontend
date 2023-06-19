import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import the styles.css file

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    addressLine1: '',
    addressLine2: '',
    county: '',
    postcode: '',
    currentWeek: '',
    dueDate: '',
    relationshipStatus: '',
    about: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make POST request to google-users endpoint
      await axios.post('http://localhost:3000/google-users', formData);

      // Make POST request to local-users endpoint
      await axios.post('http://localhost:3000/local-users', formData);

      // Reset form data
      setFormData({
        name: '',
        addressLine1: '',
        addressLine2: '',
        county: '',
        postcode: '',
        currentWeek: '',
        dueDate: '',
        relationshipStatus: '',
        about: '',
      });

      // Display success message or perform other actions
      console.log('Form submitted successfully!');
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="settings-form-wrapper">
      <div className="settings-form-container">
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Address Line 1:
            <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} />
          </label>
          <label>
            Address Line 2:
            <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
          </label>
          <label>
            County:
            <input type="text" name="county" value={formData.county} onChange={handleChange} />
          </label>
          <label>
            Postcode:
            <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} />
          </label>
          <label>
            Current Week:
            <input type="date" name="currentWeek" value={formData.currentWeek} onChange={handleChange} />
          </label>
          <label>
            Due Date:
            <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
          </label>
          <label>
            Relationship Status:
            <select name="relationshipStatus" value={formData.relationshipStatus} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Single">Single</option>
              <option value="In a Relationship">In a Relationship</option>
              <option value="Engaged">Engaged</option>
              <option value="Married">Married</option>
            </select>
          </label>
          <label>
            About:
            <textarea name="about" value={formData.about} onChange={handleChange}></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsForm;
