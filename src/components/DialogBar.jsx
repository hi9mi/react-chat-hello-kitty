import { orderBy } from 'lodash';
import React from 'react';
import DialogItem from './DialogItem';
import { Search } from './index';

const DialogBar = ({ items, userId, counter }) => {
	console.log(items);
	return (
		<div className='dialogs'>
			<Search />
			<div className='dialogs__items'>
				{items &&
					orderBy(items, ['created_at'], ['desc']).map((item, index) => (
						<DialogItem key={`${index}_${item._id}`} isMe={item.user._id === userId} counter={counter} {...item} />
					))}
			</div>
		</div>
	);
};

export default DialogBar;
