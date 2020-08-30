import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.10.10.13:3333/',
});

export default api;
