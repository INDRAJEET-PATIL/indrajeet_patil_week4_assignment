import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
      <p>Skills: {currentUser.skills}</p>
      <p>Education: {currentUser.education}</p>
      <p>Age: {currentUser.age}</p>
      {/* Add an edit button or link to allow editing */}
    </div>
  );
};

export default Profile;
