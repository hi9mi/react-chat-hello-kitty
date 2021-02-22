import logoPng from 'assets/img/logo.png';
import React from 'react';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__nav'>
				<div className='header__nav-menu'>
					<svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M16.2917 9.19364H0.708333C0.317332 9.19364 0 8.87631 0 8.48531C0 8.09431 0.317332 7.77698 0.708333 7.77698H16.2917C16.6827 7.77698 17 8.09431 17 8.48531C17 8.87631 16.6827 9.19364 16.2917 9.19364Z'
							fill='#FBFBFB'
						/>
						<path
							d='M16.2917 3.76298H0.708333C0.317332 3.76298 0 3.44565 0 3.05465C0 2.66365 0.317332 2.34631 0.708333 2.34631H16.2917C16.6827 2.34631 17 2.66365 17 3.05465C17 3.44565 16.6827 3.76298 16.2917 3.76298Z'
							fill='#FBFBFB'
						/>
						<path
							d='M16.2917 14.6241H0.708333C0.317332 14.6241 0 14.3067 0 13.9157C0 13.5247 0.317332 13.2074 0.708333 13.2074H16.2917C16.6827 13.2074 17 13.5247 17 13.9157C17 14.3067 16.6827 14.6241 16.2917 14.6241Z'
							fill='#FBFBFB'
						/>
					</svg>
				</div>
				<div className='header__nav-logo'>
					<h1>React-chat</h1>
					<img src={logoPng} alt='Logo img' />
				</div>
			</div>
			<div className='header__dialog'>
				<div className='header__dialog-user'>
					<h1>Username Username</h1> <span>online</span>
				</div>
				<div className='header__dialog-search'>
					<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M15.9023 14.9597L11.2545 10.3118C12.136 9.22342 12.6667 7.8398 12.6667 6.33336C12.6667 2.84116 9.82552 0 6.33333 0C2.84113 0 0 2.84116 0 6.33336C0 9.82555 2.84116 12.6667 6.33336 12.6667C7.8398 12.6667 9.22342 12.136 10.3118 11.2545L14.9597 15.9024C15.0899 16.0325 15.3009 16.0325 15.4311 15.9024L15.9024 15.4311C16.0325 15.3009 16.0325 15.0898 15.9023 14.9597ZM6.33336 11.3334C3.5762 11.3334 1.33335 9.09052 1.33335 6.33336C1.33335 3.5762 3.5762 1.33335 6.33336 1.33335C9.09052 1.33335 11.3334 3.5762 11.3334 6.33336C11.3334 9.09052 9.09052 11.3334 6.33336 11.3334Z'
							fill='#FBFBFB'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Header;
