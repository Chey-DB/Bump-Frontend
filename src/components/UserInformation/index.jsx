import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useAuth } from '../../Context';
import SettingsForm from '../../components/SettingsForm';

const UserPage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/settings/${user.userId}`, { withCredentials: true });
        const fetchedUserData = response.data;
        setUserData(fetchedUserData);
        setIsLoading(false);
      } catch (error) {
        console.error('An error occurred while fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [user.userId]);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.patch(`http://localhost:3000/settings/${user.userId}`, formData, { withCredentials: true });
      setUserData(response.data);
      setIsEditMode(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const renderUserSettings = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (userData) {
      const { name, addressLine1, addressLine2, city, postcode, currentWeek, dueDate, relationshipStatus, about } = userData;

      return (
        <>
          <h2>User Settings</h2>
          <div>
            <strong>Name:</strong> {name}
          </div>
          <div>
            <strong>Address Line 1:</strong> {addressLine1}
          </div>
          <div>
            <strong>Address Line 2:</strong> {addressLine2}
          </div>
          <div>
            <strong>City:</strong> {city}
          </div>
          <div>
            <strong>Postcode:</strong> {postcode}
          </div>
          <div>
            <strong>Current Week of Pregnancy:</strong> {currentWeek}
          </div>
          <div>
            <strong>Due Date of Pregnancy:</strong> {dueDate}
          </div>
          <div>
            <strong>Relationship Status:</strong> {relationshipStatus}
          </div>
          <div>
            <strong>About:</strong> {about}
          </div>
        </>
      );
    }

    return <p>No settings found.</p>;
  };

  return (
    <div className="user-page">
      {isEditMode ? (
        <SettingsForm initialData={userData} onFormSubmit={handleFormSubmit} />
      ) : (
        <>
          {renderUserSettings()}
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default UserPage;