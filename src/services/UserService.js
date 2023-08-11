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
  registerUser(user) {
    return apiClient.post('register', {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  },
  loginUser(user) {
    return apiClient.post('/login', {
      email: user.email,
      password: user.password,
    });
  },
  logoutUser() {
    return apiClient.post(
      '/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },
};
