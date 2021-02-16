import React from 'react';
import { Link } from 'react-router-dom';
import logoPng from '../assets/img/logo.png';
import SuccessfulPng from '../assets/img/register-successful.png';

const RegistrationSuccessful = () => {
	return (
		<div className='wrapper'>
			<div className='form'>
				<div className='form__logo'>
					<h1>React chat</h1>
					<img src={logoPng} alt='Logo png' />
				</div>
				<div className='form__bg'>
					<div className='form__wrapper form__wrapper-successful'>
						<img className='form__wrapper-successful-img1' src={SuccessfulPng} alt='Successful!' />
						<img className='form__wrapper-successful-img2' src={SuccessfulPng} alt='Successful!' />
						<div className='form__wrapper-successful__text'>
							<p>Awesome!</p>
							<p>Your account has been confirmed</p>
							<p>You so sweet! ^^</p>
						</div>
						<Link to='/' class='form__btn form__btn-successful' type='submit'>
							Starting chat
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationSuccessful;
