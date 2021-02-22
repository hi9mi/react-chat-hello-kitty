import { DialogBar, DialogueInput, Header, Messages } from 'components/index';
import items from 'fakeDB';
import React from 'react';

const Home = () => {
	return (
		<div className='page__wrap'>
			<div className='chat'>
				<Header />
				<div className='chat__content'>
					<div className='dialog__bar'>
						<DialogBar counter={3} userId={'1'} items={items} />
					</div>
					<div className='dialogue-window'>
						<Messages />
						<DialogueInput items={items} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
