import Registration from 'components/RegistrationForm/index';
import { withFormik } from 'formik';
import validateForm from 'utils/validateForm';

const RegistrationForm = withFormik({
	mapPropsToValues: () => ({ username: '', email: '', password: '' }),
	validate: (values) => {
		let errors = {};
		validateForm({ isAuth: false, values, errors });

		return errors;
	},
	handleSubmit: (values, { setSubmiting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmiting(false);
		}, 1000);
	},
	displayName: 'RegistrationForm',
})(Registration);
export default RegistrationForm;
