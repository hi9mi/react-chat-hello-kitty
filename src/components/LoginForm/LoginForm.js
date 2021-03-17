import Login from 'components/LoginForm/index';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import Actions, { fetchUserLogin } from 'redux/actions/user';
import store from 'redux/store';
import validateForm from 'utils/validateForm';

const LoginForm = withFormik({
	mapPropsToValues: () => ({ username: '', email: '', password: '' }),
	validate: (values) => {
		let errors = {};
		validateForm({ isAuth: true, values, errors });

		return errors;
	},

  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(Actions.fetchUserLogin(values))
      .then(({ status }) => {
        if (status === "success") {
          setTimeout(() => {
            props.history.push("/im");
          }, 100);
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
	displayName: 'LoginForm',
})(Login);


export default LoginForm;
