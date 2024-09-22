/*import React, { useState } from 'react';

const ApplicationForm = ({ jobId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <p>Application submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Apply</button>
        </form>
      )}
    </div>
  );
};

export default ApplicationForm;
*/