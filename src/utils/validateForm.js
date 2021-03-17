const validateForm = ({ isAuth, values, errors }) => {
	const rules = {
		email: (value) => {
			if (!value) {
				errors.email = 'This field is required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				errors.email = isAuth ? 'Incorrect email or password' : 'Incorrect email';
			}
		},
		password: (value) => {
			if (!value) {
				errors.password = 'This field is required';
			} else if (!isAuth && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
				errors.password = isAuth ? 'Incorrect email or password' : 'Too easy password';
			}
		},
		username: (value) => {
			if (!isAuth && !value) {
				errors.username = 'Please enter your username';
			}
		},
	};

	Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validateForm;
