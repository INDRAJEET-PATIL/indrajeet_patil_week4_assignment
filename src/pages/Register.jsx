import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password, skills, education, age };
    register(userData);
    navigate('/profile'); // Navigate to profile after registration
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skills" required />
      <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Education" required />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
