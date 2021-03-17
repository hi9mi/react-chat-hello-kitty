import { MESSAGES_SET_ITEMS, MESSAGES_SET_IS_LOADING, MESSAGES_ADD_MESSAGE } from 'redux/types';

const initialState = {
	items: [],
	isLoading: false,
};

const messages = (state = initialState, { type, payload }) => {
	switch (type) {
		case MESSAGES_ADD_MESSAGE:
      return {
        ...state,
        items: [...state.items, payload]
      };
		case MESSAGES_SET_ITEMS:
			return {
				...state,
				items: payload,
				isLoading: false,
			};
		case MESSAGES_SET_IS_LOADING:
			return {
				...state,
				isLoading: payload,
			};
		default:
			return state;
	}
};

export default messages;
