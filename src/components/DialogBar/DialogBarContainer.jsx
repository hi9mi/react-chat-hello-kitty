import { DialogBar } from 'components/index';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDialogs, setCurrentDialogId } from 'redux/actions/dialogs';
import socket from "core/socket"

const DialogBarContainer = ({ userId, counter }) => {
	const dispatch = useDispatch();

	const items = useSelector(({ dialogs }) => dialogs.items);

	const currentDialogId = useSelector(({ dialogs }) => dialogs.currentDialogId);



	const [inputValueSearch, setInputValueSearch] = React.useState('');

	const [filtred, setFiltred] = React.useState([]);

	const onChangeInput = (value = '') => {
		setFiltred(
			items.filter(
				(dialog) =>
					dialog.author.username.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
					dialog.partner.username.toLowerCase().indexOf(value.toLowerCase()) >= 0,
			),
		);
		setInputValueSearch(value);
	};
	const onNewDialog = () => {
    fetchDialogs();
  };

	window.fetchDialogs = fetchDialogs;

	React.useEffect(() => {
		if (items.length) {
			onChangeInput();
		} 
	}, [items]);

	React.useEffect(() => {
		dispatch(fetchDialogs());
		// if (!items.length) {
		// 	dispatch(fetchDialogs());
		// } else {
		// 	setFiltred(items);
		// }

		socket.on("SERVER:DIALOG_CREATED", onNewDialog);
		return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
	}, [items]);

	const onSelectDialog = (id) => {
		dispatch(setCurrentDialogId(id));
	};

	return (
		<DialogBar
			items={filtred}
			userId={userId}
			onChangeInput={onChangeInput}
			inputValue={inputValueSearch}
			counter={counter}
			onSelectDialog={onSelectDialog}
			currentDialogId={currentDialogId}
		/>	
	);
};

export default DialogBarContainer;
