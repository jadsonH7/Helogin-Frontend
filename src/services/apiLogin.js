import axios from 'axios';

const baseURL = `https://helogin-api.onrender.com/api`;
export const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});