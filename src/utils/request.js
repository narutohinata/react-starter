import axios from 'axios';
import { API_GATEWAY } from '../constants/api';

export default axios.create({
  baseURL: API_GATEWAY,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
  }
});