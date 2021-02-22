import classNames from 'classnames';
import { AuthBlock, Button } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';


const Login = (props) => {
	const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props;
	return (
		<AuthBlock>
			<div className='auth__title'>
				<p>Login</p>
			</div>
			<form onSubmit={handleSubmit} className='auth__form'>
				<div className='auth__form-field'>
					<input
						id='email'
						placeholder='Email...'
						type='text'
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						className={classNames('auth__form-field-input auth__form-field-input-email', {
							'auth__form-field-input-email-error': errors.email && touched.email,
						})}
					/>
					{errors.email && touched.email && <div className='auth__form-field-input-email-feedback'>{errors.email}</div>}
				</div>
				<div className='auth__form-field'>
					<input
						id='password'
						placeholder='Password...'
						type='text'
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						className={classNames('auth__form-field-input auth__form-field-input-password', {
							'auth__form-field-input-password-error': errors.password && touched.password,
						})}
					/>
					{errors.password && touched.password && (
						<div className='auth__form-field-input-password-feedback'>{errors.password}</div>
					)}
				</div>
				<Button disabled={isSubmitting}>Login</Button>
				<p>
					or <Link to='/registration'>Register</Link> now
				</p>
			</form>
		</AuthBlock>
	);
};



export default Login;
