import React from 'react';
import { Avatar, Time } from './index';

const DialogItem = ({ text, user, created_at, isMe, counter }) => {
	return (
		<div className='dialogs__items__item'>
			<Avatar name={user.username} avatar={user.avatar} />
			<div className='dialogs__items__item-content'>
				<div className='dialogs__items__item-content__head'>
					<div className='dialogs__items__item-content__head__username'>
						<h1>{user.username}</h1>
					</div>
					<div className='dialogs__items__item-content__head__date'>
						<Time date={created_at} />
					</div>
				</div>
				<div className='dialogs__items__item-content__foot'>
					{isMe && (
						<div className='dialogs__items__item-content__foot-me'>
							<h1>You: </h1>
						</div>
					)}
					<div className='dialogs__items__item-content__foot-message'>
						<p>{text}</p>
					</div>
					{!isMe && (
						<div className='dialogs__items__item-content__foot-counter'>
							{counter > 99 ? <p>+99</p> : <p>{counter}</p>}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DialogItem;
