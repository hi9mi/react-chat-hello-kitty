import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Time } from './index';

const Message = ({ ava, user, text, date }) => {
	return (
		<div className='message'>
			<div className='message__avatar'>
				{ava ? <img src={ava} alt='User avatar' /> : <Avatar name={user} avatar={ava} />}
			</div>
			<div className='message__buble'>
				<div className='message__buble-username'>
					<h1>{user.fullname}</h1>
				</div>
				<div className='message__buble-text'>
					<p>{text}</p>
				</div>
			</div>
			<div className='message__date'>
				<Time date={date} />
				<svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z'
						fill='#6B6466'
					/>
					<path
						d='M5 10C5.69036 10 6.25 9.44036 6.25 8.75C6.25 8.05964 5.69036 7.5 5 7.5C4.30964 7.5 3.75 8.05964 3.75 8.75C3.75 9.44036 4.30964 10 5 10Z'
						fill='#6B6466'
					/>
					<path
						d='M5 2.5C5.69036 2.5 6.25 1.94036 6.25 1.25C6.25 0.559644 5.69036 0 5 0C4.30964 0 3.75 0.559644 3.75 1.25C3.75 1.94036 4.30964 2.5 5 2.5Z'
						fill='#6B6466'
					/>
				</svg>
			</div>
		</div>
	);
};

Message.defaultProps = {
	user: { fullname: 'Alexander Kalinin ' },
};

Message.propTypes = {
	ava: PropTypes.string,
	user: PropTypes.object,
	text: PropTypes.string,
	date: PropTypes.string,
};

export default Message;
