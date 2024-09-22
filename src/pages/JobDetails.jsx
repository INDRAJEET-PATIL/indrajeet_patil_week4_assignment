import React from 'react';

const Applications = () => {
  // This is a placeholder. You should fetch the applications from your state or context.
  const applications = [
    { id: 1, jobTitle: 'Software Engineer', status: 'Submitted' },
    { id: 2, jobTitle: 'Product Manager', status: 'Interviewing' },
  ];

  return (
    <div>
      <h2>Your Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>
            {app.jobTitle} - Status: {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
