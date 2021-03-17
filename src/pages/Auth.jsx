import { LoginFormContainer, RegisterFormContainer, RegistrationSuccessful } from 'components';
import React from 'react';
import { Route, Switch } from 'react-router';

const Auth = () => {
	return (
		<Switch>
			<Route path='/registration' component={RegisterFormContainer} exact />
			<Route path={['/', '/login']} component={LoginFormContainer} exact />
			<Route path='/registration/successful' component={RegistrationSuccessful} exact />
		</Switch>
	);
};

export default Auth;
