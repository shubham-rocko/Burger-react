import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f052d.firebaseio.com/'
});

export default instance;