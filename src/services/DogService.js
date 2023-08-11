import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost/api/',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getDogs(locale) {
    const langParam = locale !== 'en' ? '?lang=' + locale : '';
    return apiClient.get('/dogs' + langParam);
  },
  getDog(id, locale) {
    const langParam = locale !== 'en' ? '?lang=' + locale : '';
    return apiClient.get('/dogs/' + id + langParam);
  },
  deleteDog(id) {
    console.log('deleteDog:', '/dogs/' + id);
    return apiClient.delete('/dogs/' + id);
  },
  createDog(dogData) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return apiClient.post('/dogs', dogData, config);
  },
};
