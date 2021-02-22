import logoPng from 'assets/img/logo.png';
import classNames from 'classnames';
import React from 'react';

const AuthBlock = ({ children, successful }) => {
	return (
		<div className='block'>
			<div className='auth'>
				<div className='auth__logo'>
					<h1>React chat</h1>
					<img src={logoPng} alt='Logo png' />
				</div>
				<div className='auth__bg'>
					<div className={classNames('auth__block', { 'auth__block-successful': successful })}>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AuthBlock;
