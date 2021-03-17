import { USER_SET_DATA } from 'redux/types';
import { userAPI } from 'utils/api/index';

const Actions = {
	setUserData: (data) => ({
		type: USER_SET_DATA,
		payload: data,
	}),
	fetchUserData: () => (dispatch) => {
		userAPI.getMe().then(({ data }) => {
			dispatch(Actions.setUserData(data));
		});
	},
	fetchUserLogin: (postData) => (dispatch) => {
		return userAPI
			.login(postData)
			.then(({ data }) => {
				const { token } = data;
				alert('Login success: welcome back !');
				window.axios.defaults.headers.common['token'] = token;
				window.localStorage['token'] = token;
				dispatch(Actions.fetchUserData());
				return data;
			})
			.catch(({ response }) => {
				if (response.status === 403) {
					alert('Login error: incorrect email or password');
				}
			});
	},
	fetchUserRegister: (postData) => (dispatch) => {
		return userAPI.registration(postData).then(({ data }) => {
			return data;
		});
	},
};

export default Actions;
