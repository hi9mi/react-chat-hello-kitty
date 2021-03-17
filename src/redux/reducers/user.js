import { USER_SET_DATA, USER_SET_IS_AUTH } from 'redux/types';

const initialState = {
	data: null,
	isAuth: !!window.localStorage.token,
	token: window.localStorage.token,
};

const user = (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_SET_DATA:
			return {
				...state,
				data: payload,
				isAuth: true,
				token: window.localStorage.token,
			};
		case USER_SET_IS_AUTH:
			return {
				...state,
				isAuth: payload,
			};
		default:
			return state;
	}
};

export default user;
