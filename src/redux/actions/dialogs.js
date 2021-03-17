import { DIALOGS_SET_CURRENT_DIALOG_ID, DIALOGS_SET_ITEMS, DIALOGS_SET_LOADING } from 'redux/types';
import { dialogsAPI } from 'utils/api/index';

export const setLoading = (payload) => ({
	type: DIALOGS_SET_LOADING,
	payload,
});

export const fetchDialogs = () => (dispatch) => {
	dispatch(setLoading(true));
	dialogsAPI
		.getAll()
		.then(({ data }) => {
			dispatch(setDialogs(data));
		})
		.finally(() => {
			dispatch(setLoading(false));
		})
		.catch(() => {
			dispatch(setLoading(false));
		});
};

export const setDialogs = (items) => ({
	type: DIALOGS_SET_ITEMS,
	payload: items,
});

export const setCurrentDialogId = (id) => ({
	type: DIALOGS_SET_CURRENT_DIALOG_ID,
	payload: id,
});
