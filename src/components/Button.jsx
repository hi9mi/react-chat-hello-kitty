import classNames from 'classnames';
import React from 'react';

const Button = ({ children, disabled, className }) => {
	return (
		<button className={classNames('auth__btn', className)} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
