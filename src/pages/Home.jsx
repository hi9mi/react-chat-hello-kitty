import { DialogBarContainer, DialogueInputContainer, Header, MessagesContainer } from 'components/index';
import React from 'react';

const Home = () => {
	return (
		<div className='page__wrap'>
			<div className='chat'>
				<Header />
				<div className='chat__content'>
					<div className='dialog__bar'>
						<DialogBarContainer counter={3} userId={'1'} />
					</div>
					<div className='dialogue-window'>
						<MessagesContainer />
						<DialogueInputContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
