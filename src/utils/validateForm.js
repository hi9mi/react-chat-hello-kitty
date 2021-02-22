const validateForm = ({ isAuth, values, errors }) => {
	const rules = {
		email: (value) => {
			if (!value) {
				errors.email = 'This field is required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				errors.email = isAuth ? 'Incorrect email or password' : 'Incorrect email';
			}
		},
		username: (value) => {
			if (!value) {
				errors.username = 'This field is required';
			} else if (!/^[A-Za-z0-9_]+$/i.test(value)) {
				errors.email = 'Incorrect username';
			}
		},
		password: (value) => {
			if (!value) {
				errors.password = 'This field is required';
			} else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
				errors.password = isAuth ? 'Incorrect email or password' : 'Too easy password';
			}
		},
	};

	Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validateForm;
