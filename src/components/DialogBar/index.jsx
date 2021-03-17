import { orderBy } from 'lodash';
import React from 'react';
import DialogItem from '../DialogItem';
import { Search } from '../index';

const DialogBar = ({ items, userId, counter, inputValue, onChangeInput, onSelectDialog, currentDialogId }) => {
	return (
		<div className='dialogs'>
			<Search inputValue={inputValue} onChangeInput={onChangeInput} />
			<div className='dialogs__items'>
				{items.length ? (
					orderBy(items, ['created_at'], ['desc']).map((item, index) => (
						<DialogItem
							onSelect={onSelectDialog}
							key={`${index}_${item._id}`}
							isMe={item.user._id === userId}
							counter={counter}
							currentDialogId={currentDialogId}
							{...item}
						/>
					))
				) : (
					<h1>No dialogs Found</h1>
				)}
			</div>
		</div>
	);
};

export default DialogBar;
