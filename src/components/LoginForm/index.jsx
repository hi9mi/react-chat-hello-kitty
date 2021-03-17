import { AuthBlock, Button } from 'components';
import { InputField } from 'components/index';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
	const {
		values,
		touched,
		errors,
		dirty,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		status,
	} = props;

	return (
		<AuthBlock>
			<div className='auth__title'>
				<p>Login</p>
			</div>
			<form onSubmit={handleSubmit} className='auth__form'>
				<InputField
					name='email'
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
					Login
				</Button>
				<p>
					or <Link to='/registration'>Register</Link> now
				</p>
			</form>
		</AuthBlock>
	);
};

export default Login;
