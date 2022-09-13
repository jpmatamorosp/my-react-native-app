import axios from 'axios';

const api = axios.create({
  baseURL: 'https://agsoderentryv4.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };