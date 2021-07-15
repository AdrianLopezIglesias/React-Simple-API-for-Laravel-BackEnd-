import axios from 'axios';
axios.defaults.withCredentials = true;
const apiClient = axios.create({
    headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": true},
    withCredentials: true,
    credentials: true,
    baseURL: 'https://webpersonal',
});

export default apiClient;