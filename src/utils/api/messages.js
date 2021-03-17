import { axios } from 'core/index';

const messages = {
	getMessagesByDialogId: (id) => axios.get(`messages?dialog=${id}`),
	send: (text, dialogId) =>
		axios.post('/messages', {
			text: text,
			dialog_id: dialogId,
		}),
};

export default messages;
