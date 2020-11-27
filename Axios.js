import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    timeout: 50000,
})

export default instance;