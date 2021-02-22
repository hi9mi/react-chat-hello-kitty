import Login from 'components/LoginForm/';
import { withFormik } from 'formik';
import validateForm from 'utils/validateForm';

const LoginForm = withFormik({
	mapPropsToValues: () => ({ username: '', email: '', password: '' }),
	validate: (values) => {
		let errors = {};
		validateForm({ isAuth: true, values, errors });

		return errors;
	},
	handleSubmit: (values, { setSubmiting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmiting(false);
		}, 1000);
	},
	displayName: 'RegistrationForm',
})(Login);
export default LoginForm;
