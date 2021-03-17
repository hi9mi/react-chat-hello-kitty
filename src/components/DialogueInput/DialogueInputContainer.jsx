import { DialogueInput } from 'components/index';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSendMessage } from 'redux/actions/messages';

const DialogueInputContainer = () => {
	const dispatch = useDispatch();

	const items = useSelector(({ dialogs }) => dialogs.items);
	const isLoading = useSelector(({ dialogs }) => dialogs.isLoading);
	const currentDialogId = useSelector(({ dialogs }) => dialogs.currentDialogId);

	const onSendMessage = () => {
		dispatch(fetchSendMessage());
	};
	const dialogId = () => {
		dispatch(currentDialogId());
	};
	return <DialogueInput onSendMessage={onSendMessage} currentDialogId={dialogId} isLoading={isLoading} items={items} />;
};

export default DialogueInputContainer;
