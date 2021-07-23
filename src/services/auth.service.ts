import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_BASE_URL;

class AuthService {
  login(username: string, password: string) {
    return axios.post(API_URL + '/api/v2.0/login', {
      username,
      password,
    });
  }
}

export default new AuthService();
