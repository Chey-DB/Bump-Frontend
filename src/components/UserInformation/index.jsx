import React from 'react';

const UserInformation = ({ userData }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>{userData.name}</p>
      <p>Address Line 1: {userData.addressLine1}</p>
      <p>Address Line 2: {userData.addressLine2}</p>
      <p>County: {userData.county}</p>
      <p>Postcode: {userData.postcode}</p>
      <p>Current Week of Pregnancy: {userData.currentWeek}</p>
      <p>Due Date of Pregnancy: {userData.dueDate}</p>
      <p>Relationship Status: {userData.relationshipStatus}</p>
      <p>About: {userData.about}</p>
    </div>
  );
};

export default UserInformation;