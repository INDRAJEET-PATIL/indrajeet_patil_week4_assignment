import axios from 'axios';

const API_URL = 'http://example.com/api'; // Replace with your API

const register = async (email, password) => {
  return await axios.post(`${API_URL}/register`, { email, password });
};

const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

const logout = () => {
  // Logic to log out user
};

export default { register, login, logout };
