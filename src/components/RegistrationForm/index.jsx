import classNames from 'classnames';
import { AuthBlock, Button } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';

const Registration = (props) => {
	const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props;
	console.log(errors, touched);

	return (
		<AuthBlock>
			<div className='auth__title'>
				<p>Registration</p>
			</div>
			<form onSubmit={handleSubmit} className='auth__form'>
				<div className='auth__form-field'>
					<input
						id='username'
						placeholder='Username...'
						type='text'
						value={values.username}
						onChange={handleChange}
						onBlur={handleBlur}
						className={classNames('auth__form-field-input auth__form-field-input-username', {
							'auth__form-field-input-username-error': errors.username && touched.username,
						})}
					/>
					{errors.username && touched.username && (
						<div className='auth__form-field-input-username-feedback'>{errors.username}</div>
					)}
				</div>
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
				<Button disabled={isSubmitting}>Sign up</Button>
				<p>
					or if you have account <Link to='/login'>Login</Link>
				</p>
			</form>
		</AuthBlock>
	);
};

export default Registration;
