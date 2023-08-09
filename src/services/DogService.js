import axios from 'axios';
import i18n from '../locales/i18n';

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
};
