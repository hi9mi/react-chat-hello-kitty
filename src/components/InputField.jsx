import classNames from 'classnames';
import React from 'react';

const InputField = ({ name, id, placeholder, type, values, handleBlur, handleChange, errors, touched }) => {
	return (
		<div className='auth__form-field'>
			<input
				name={name}
				id={name}
				placeholder={placeholder}
				type={type}
				value={values[name]}
				onChange={handleChange}
				onBlur={handleBlur}
				className={classNames(`auth__form-field-input auth__form-field-input-${name}`, {
					[`auth__form-field-input-${name}-error`]: errors[name] && touched[name],
				})}
			/>
			{errors[name] && touched[name] && (
				<div className={classNames('', { [`auth__form-field-input-${name}-feedback`]: true })}>{errors[name]}</div>
			)}
		</div>
	);
};

export default InputField;
