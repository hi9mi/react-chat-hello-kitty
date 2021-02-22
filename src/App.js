import { Auth, Home } from 'pages';
import React from 'react';
import { Route } from 'react-router';
import './scss/app.scss';

function App() {
	return (
		<>
			<Route path={['/', '/login']} component={Auth} />
			<Route path='/im' component={Home} />
		</>
	);
}

export default App;
