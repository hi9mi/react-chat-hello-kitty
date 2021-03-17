import { Auth, Home } from 'pages';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { Switch } from 'react-router-dom';
import './scss/app.scss';

function App() {
	const isAuth = useSelector(({ user }) => user.isAuth);
	return (
		<Switch>
			<Route path={['/', 'login', '/registration', '/registration/successful']} component={Auth} />
			{/* <Route path='/im' component={Home} /> */}
			{/* <Route path='/im' component={Home} /> */}
			<Route path='/im' render={() => (isAuth ? <Home /> : <Redirect to='/login' />)} exact />
			{/* {isAuth ? <Redirect to='/im' /> : <Redirect to={['/login', '/registration', '/registration-successful']} />} */}
		</Switch>
	);
}

export default App;
