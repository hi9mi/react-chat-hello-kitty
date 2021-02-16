import React from 'react';
import { Link } from 'react-router-dom';
import logoPng from '../assets/img/logo.png';

const Registration = () => {
	return (
		<div className='wrapper'>
			<div className='form'>
				<div className='form__logo'>
					<h1>React chat</h1>
					<img src={logoPng} alt='Logo png' />
				</div>
				<div className='form__bg'>
					<div className='form__wrapper'>
						<div className='form__title'>
							<p>Registration</p>
						</div>
						<form>
							<input type='text' placeholder='Username...' />
							<input type='text' placeholder='Email...' />
							<input type='password' placeholder='Password...' />
							<button class='form__btn' type='submit'>
								Sign up
							</button>
							<p>or if you have account <Link to='/login'>Login</Link></p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
