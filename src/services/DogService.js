import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getDogs() {
    return apiClient.get('/dogs');
  },
  getDog(id) {
    return apiClient.get('/dogs/' + id);
  },
};
