import { DIALOGS_SET_CURRENT_DIALOG_ID, DIALOGS_SET_ITEMS, DIALOGS_SET_LOADING } from 'redux/types';

const initialState = {
	items: [],
  currentDialogId: window.location.pathname.split("dialog/")[1],
	isLoading: false,
};

const dialogs = (state = initialState, { type, payload }) => {
	switch (type) {
		case DIALOGS_SET_ITEMS:
			return {
				...state,
				items: payload,
				isLoading: false,
			};
		case DIALOGS_SET_CURRENT_DIALOG_ID:
			return {
				...state,
				currentDialogId: payload,
			};
		case DIALOGS_SET_LOADING:
			return {
				...state,
				isLoading: payload,
			};
		default:
			return state;
	}
};

export default dialogs;
