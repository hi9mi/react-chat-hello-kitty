import Registration from 'components/RegistrationForm/index';
import { withFormik } from 'formik';
import Actions, { fetchUserRegistration } from 'redux/actions/user';
import store from 'redux/store';
import validateForm from 'utils/validateForm';

const RegistrationForm = withFormik({
	mapPropsToValues: () => ({ username: '', email: '', password: '' }),
	validate: (values) => {
		let errors = {};
		validateForm({ isAuth: false, values, errors });

		return errors;
	},
	handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(Actions.fetchUserRegister(values))
      .then(({ status }) => {
        if (status === "success") {
          setTimeout(() => {
            props.history.push("/im");
          }, 50);
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
	displayName: 'RegistrationForm',
})(Registration);

export default RegistrationForm;
