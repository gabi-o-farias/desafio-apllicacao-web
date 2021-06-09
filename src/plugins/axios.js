import axios from 'axios';

const baseConfig = {
    baseURL: `https://tasks.googleapis.com`,
    headers: {
        Authorization: `Bearer {token }`
    }
  }
  
  export const axiosInstance = axios.create(baseConfig);