import axios from 'axios';
import baseURL from './baseUrl';

// axios实例
const request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '';
    if (token) {
      config.headers.Authorization = `Bearer ` + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default request;
