import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [applications, setApplications] = useState([]);

  const register = (userData) => {
    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setCurrentUser(userData);
  };

  const login = (email, password) => {
    const storedUser = users.find(user => user.email === email && user.password === password);
    if (storedUser) {
      setCurrentUser(storedUser);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const applyJob = (job) => {
    setApplications((prev) => [...prev, job]);
    alert(`Applied for ${job.title} at ${job.company}`);
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout, applyJob, applications }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
