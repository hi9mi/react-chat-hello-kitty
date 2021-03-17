import { Messages } from 'components/index';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, addMessage } from 'redux/actions/messages';
import socket from "core/socket";


const MessagesContainer = ({removeMessageById}) => {
	const messagesRef = React.useRef(null);
	const dispatch = useDispatch();
	const messages = useSelector(({ messages }) => messages.items);
	const isLoading = useSelector(({ messages }) => messages.isLoading);
	const currentDialogId = useSelector(({ dialogs }) => dialogs.currentDialogId);
	const user = useSelector(({ user }) => user.data);

	React.useEffect(() => {
		messagesRef.current.scrollTo(0, 999999);
	}, [messages]);

	const onNewMessage = data => {
    addMessage(data);
  };

	React.useEffect(() => {
		if (currentDialogId) {
			dispatch(fetchMessages(currentDialogId));
		}

		socket.on("SERVER:NEW_MESSAGE", onNewMessage);
		
		return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
	}, [currentDialogId]);

	return <Messages messageRef={messagesRef} items={messages} currentDialogId={currentDialogId} isLoading={isLoading} user={user}  onRemoveMessage={removeMessageById} />;
};

export default MessagesContainer;
