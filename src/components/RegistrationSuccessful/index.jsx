import SuccessfulPng from 'assets/img/register-successful.png';
import { AuthBlock } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import { userAPI } from 'utils/api/index';

const verifiedAccount = (hash, verified) => {
	if (hash) {
		if (verified) {
			return (
				<AuthBlock successful>
					<img className='auth__block-successful-img1' src={SuccessfulPng} alt='Successful!' />
					<img className='auth__block-successful-img2' src={SuccessfulPng} alt='Successful!' />
					<div className='auth__block-successful__text'>
						<p>Awesome!</p>
						<p>Your account has been confirmed</p>
						<p>You so sweet! ^^</p>
					</div>
					<Link to='/login' className='auth__btn auth__btn-successful'>
						Login your account
					</Link>
				</AuthBlock>
			);
		} else {
			return (
				<AuthBlock successful>
					<div className='auth__block-successful__text'>
						<p>Oops...</p>
						<p>Sorry...</p>
						<p>{'Account confirmation error :('}</p>
					</div>
					<Link to='/login' className='auth__btn auth__btn-successful'>
						Login your account
					</Link>
				</AuthBlock>
			);
		}
	} else {
		return (
			<AuthBlock successful>
				<div className='auth__block-successful__text'>
					<p>Please</p>
					<p>Confirm your account</p>
				</div>
				<Link to='/im' className='auth__btn auth__btn-successful'>
					Confirm account
				</Link>
			</AuthBlock>
		);
	}
};

const RegistrationSuccessful = ({ location, history }) => {
	const [verified, setVerified] = React.useState(false);
	const hash = location.search.split('hash=')[1];

	React.useEffect(() => {
		if (hash) {
			userAPI.verify(hash).then(({ data }) => {
				if (data.status === 'success') {
					// setTimeout(() => {
					// 	history.push(`/user/registration/successful?hash=${hash}`);
					// }, 2000);
					setVerified(true);
				} else {
					setVerified(false);
				}
			});
		}
	}, [hash]);

	return verifiedAccount(hash, verified);
};

export default RegistrationSuccessful;
