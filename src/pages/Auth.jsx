import { LoginForm, RegistrationForm, RegistrationSuccessful } from 'components';
import React from 'react';
import { Route, Switch } from 'react-router';

const Auth = () => {
	return (
		<Switch>
			<Route path={['/', '/login']} exact>
				<LoginForm />
			</Route>
			<Route path='/registration' exact>
				<RegistrationForm />
			</Route>
			<Route path='/registration-successful' exact>
				<RegistrationSuccessful />
			</Route>
		</Switch>
	);
};

export default Auth;
