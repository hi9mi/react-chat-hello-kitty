import SuccessfulPng from 'assets/img/register-successful.png';
import { AuthBlock } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationSuccessful = () => {
	return (
		<AuthBlock successful>
			<img className='auth__block-successful-img1' src={SuccessfulPng} alt='Successful!' />
			<img className='auth__block-successful-img2' src={SuccessfulPng} alt='Successful!' />
			<div className='auth__block-successful__text'>
				<p>Awesome!</p>
				<p>Your account has been confirmed</p>
				<p>You so sweet! ^^</p>
			</div>
			<Link to='/im' className='auth__btn auth__btn-successful'>
				Starting chat
			</Link>
		</AuthBlock>
	);
};

export default RegistrationSuccessful;
