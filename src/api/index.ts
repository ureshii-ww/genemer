import axios from 'axios';

export const API_URL = 'http://universities.hipolabs.com';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
