import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Time } from './index';

const DialogItem = ({ _id, undread, created_at, text, isMe, currentDialogId, onSelect, lastMessage }) => {
	return (
		<Link to={`/dialog/${_id}`}>
			<div
				onClick={() => onSelect(_id)}
				className={classNames('dialogs__items__item', {
					active: _id === currentDialogId,
				})}>
				{/* <Avatar user={user} /> */}
				<div className='dialogs__items__item-content'>
					<div className='dialogs__items__item-content__head'>
						<div className='dialogs__items__item-content__head__username'>
							<h1>{lastMessage.user.username}</h1>
						</div>
						<div className='dialogs__items__item-content__head__date'>
							<Time date={lastMessage.created_at} />
						</div>
					</div>
					<div className='dialogs__items__item-content__foot'>
						{isMe && (
							<div className='dialogs__items__item-content__foot-me'>
								<h1>You: </h1>
							</div>
						)}
						<div className='dialogs__items__item-content__foot-message'>
							<p>{lastMessage.text}</p>
						</div>
						{!isMe && (
							<div className='dialogs__items__item-content__foot-counter'>
								{lastMessage.undread > 99 ? <p>+99</p> : <p>{lastMessage.undread}</p>}
							</div>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default DialogItem;
