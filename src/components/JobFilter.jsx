import React, { useState } from 'react';

const JobFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({ location: '', jobType: '', company: '' });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      </div>
      <div className="form-group">
        <input type="text" name="jobType" placeholder="Job Type" onChange={handleChange} />
      </div>
      <div className="form-group">
        <input type="text" name="company" placeholder="Company" onChange={handleChange} />
      </div>
      <button type="submit">Filter</button>
    </form>
  );
};

export default JobFilter;
