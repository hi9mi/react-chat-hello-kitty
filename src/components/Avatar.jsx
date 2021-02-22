import PropTypes from 'prop-types';
import querystring from 'querystring';
import randomcolor from 'randomcolor';
import React from 'react';

function removeUndefinedOrNull(obj) {
	Object.keys(obj).forEach((key) => {
		if (obj[key] === undefined || obj[key] === null) delete obj[key];
	});

	return obj;
}

function GenerateAvatar({ size, fontSize, length, name, rounded, background, color, uppercase, ...props }) {
	const query = querystring.stringify(
		removeUndefinedOrNull({
			size,
			'font-size': fontSize,
			length,
			name,
			rounded,
			background: randomcolor({ luminosity: 'light', hue: '#ffb9d4' }),
			color: randomcolor({ luminosity: 'dark', hue: '#6b6466' }),
			uppercase,
		}),
	);
	return (
		<div className='dialogs__item-ava'>
			{props.avatar ? (
				<img src={props.avatar} alt={name} />
			) : (
				<img className='dialogs__item-ava' src={`https://ui-avatars.com/api/?${query}`} alt={name} {...props} />
			)}
			<span />
		</div>
	);
}

GenerateAvatar.propTypes = {
	size: PropTypes.number,
	fontSize: PropTypes.number,
	length: PropTypes.number,
	name: PropTypes.string,
	rounded: PropTypes.bool,
	background: PropTypes.string,
	color: PropTypes.string,
	uppercase: PropTypes.bool,
};

GenerateAvatar.settings = {
	size: 46,
	rounded: true,
};

GenerateAvatar.defaultProps = GenerateAvatar.settings;

export default GenerateAvatar;
