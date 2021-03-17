import { axios } from 'core/index';

const user = {
	registration: (postData) => axios.post('/user/registration', postData),
	login: (postData) => axios.post('/user/login', postData),
	verify: (hash) => axios.get(`/user/registration/successful?hash=${hash}`),
	getMe: () => axios.get('/user/me'),
};

export default user;
