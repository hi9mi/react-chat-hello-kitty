import classNames from 'classnames';
import React from 'react';

const Button = ({ children, disabled, className, onClick, type }) => {
	return (
		<button type={type} onClick={onClick} className={classNames('auth__btn', className)} disabled={disabled} >
			{children}
		</button>
	);
};

export default Button;
