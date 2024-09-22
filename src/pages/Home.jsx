import React from 'react';
import { useAuth } from '../context/AuthContext';
import JobList from '../components/JobList';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Job Board</h1>
      {currentUser ? (
        <div>
         <p>Welcome, {currentUser.name}</p>

          <JobList />
        </div>
      ) : (
        <p>Please <a href="/login">login</a> to view job listings.</p>
      )}
    </div>
  );
};

export default Home;
