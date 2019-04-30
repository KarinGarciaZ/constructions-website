import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  //baseURL: 'http://127.0.0.1:3001'  
  baseURL: 'https://murmuring-eyrie-84778.herokuapp.com'
})

export default instance;