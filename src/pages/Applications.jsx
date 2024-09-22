import React from 'react';
import { useAuth } from '../context/AuthContext';

const Applications = () => {
  const { applications } = useAuth();

  return (
    <div className="container">
      <h2>Your Applications</h2>
      {applications.length > 0 ? (
        <ul className="list-group">
          {applications.map((job, index) => (
            <li key={index} className="list-group-item">
              {job.title} - {job.company} ({job.location})
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not applied for any jobs yet.</p>
      )}
    </div>
  );
};

export default Applications;
