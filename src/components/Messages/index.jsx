import React from 'react';
import { Eclipse } from 'react-loading-io';
import { Message } from '../index';

const Messages = ({ onRemoveMessage, items, isLoading, messageRef, user }) => {
	return (
		<div ref={messageRef} className='dialogue-window__messages'>
			{isLoading ? (
				<Eclipse size={64} />
			) : items && !isLoading ? (
				items.length > 0 ? (
					items.map((item) => (
						<Message
							onRemoveMessage={onRemoveMessage.bind(this, item._id)}
							key={item._id}
							{...item}
							isMe={user._id === item.user._id}
						/>
					))
				) : (
					<p>No messages</p>
				)
			) : (
				<p>No messages</p>
			)}
		</div>
	);
};

export default Messages;
