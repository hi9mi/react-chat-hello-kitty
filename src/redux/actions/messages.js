import { MESSAGES_SET_IS_LOADING, MESSAGES_SET_ITEMS, MESSAGES_ADD_MESSAGE } from 'redux/types';
import { messagesAPI } from 'utils/api/index';

const setLoading = (payload) => ({
	type: MESSAGES_SET_IS_LOADING,
	payload,
});

export const fetchMessages = (dialogId) => (dispatch) => {
	dispatch(setLoading(true));
	messagesAPI
		.getMessagesByDialogId(dialogId)
		.then(({ data }) => {
			dispatch(setMessages(data));
		})
		.catch(() => {
			dispatch(setLoading(false));
		});
};

export const addMessage = (message) => (dispatch, getState) => {
	const { dialogs } = getState();
	const { currentDialogId } = dialogs;

	if (currentDialogId === message.dialog._id) {
		dispatch({
			type: MESSAGES_ADD_MESSAGE,
			payload: message
		});
	}
}

export const fetchSendMessage = (text, dialogId) => dispatch => {
	messagesAPI.send(text, dialogId);
}

export const setMessages = (items) => ({
	type: MESSAGES_SET_ITEMS,
	payload: items,
});
