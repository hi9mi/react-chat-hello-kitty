import { AuthBlock, Button } from 'components';
import { InputField } from 'components/index';
import React from 'react';
import { Link } from 'react-router-dom';

const Registration = (props) => {
	const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;

	return (
		<AuthBlock>
			<div className='auth__title'>
				<p>Registration</p>
			</div>
			<form onSubmit={handleSubmit} className='auth__form'>
				<InputField
					name={'username'}
					placeholder={'Username...'}
					type={'text'}
					values={values}
					handleBlur={handleBlur}
					handleChange={handleChange}
					errors={errors}
					touched={touched}
				/>
				<InputField
					name={'email'}
					placeholder={'Email...'}
					type={'text'}
					values={values}
					handleBlur={handleBlur}
					handleChange={handleChange}
					errors={errors}
					touched={touched}
				/>
				<InputField
					name={'password'}
					placeholder={'Password...'}
					type={'password'}
					values={values}
					handleBlur={handleBlur}
					handleChange={handleChange}
					errors={errors}
					touched={touched}
				/>
				<Button disabled={isSubmitting} onClick={handleSubmit} type={'submit'}>
					Sign up
				</Button>
				<p>
					or if you have account <Link to='/login'>Login</Link>
				</p>
			</form>
		</AuthBlock>
	);
};

export default Registration;
