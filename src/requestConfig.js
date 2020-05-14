import axios from 'axios'

const axiosInstance = (headers = {}) => (
  axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://545d97fa.ngrok.io/',
    headers: {
      ...headers,
      'Access-Control-Allow-Origin': '*'
    }
  })
);

export default axiosInstance