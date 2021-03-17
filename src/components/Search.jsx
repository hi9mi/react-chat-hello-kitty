import PropTypes from 'prop-types';
import React from 'react';

const Search = ({ onChangeInput, inputValue }) => {
	return (
		<div className='dialogs__search'>
			<input
				value={inputValue}
				onChange={e => onChangeInput(e.target.value)}
				className='dialogs__search-input'
				type='text'
				placeholder='Search'
			/>
			<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M0.0976553 14.9597L4.74554 10.3118C3.86398 9.22342 3.33332 7.8398 3.33332 6.33336C3.33332 2.84116 6.17448 0 9.66667 0C13.1589 0 16 2.84116 16 6.33336C16 9.82555 13.1588 12.6667 9.66664 12.6667C8.1602 12.6667 6.77658 12.136 5.68823 11.2545L1.04034 15.9024C0.910126 16.0325 0.699125 16.0325 0.568906 15.9024L0.0976238 15.4311C-0.0325317 15.3009 -0.0325317 15.0898 0.0976553 14.9597ZM9.66664 11.3334C12.4238 11.3334 14.6667 9.09052 14.6667 6.33336C14.6667 3.5762 12.4238 1.33335 9.66664 1.33335C6.90948 1.33335 4.66663 3.5762 4.66663 6.33336C4.66663 9.09052 6.90948 11.3334 9.66664 11.3334Z'
					fill='#B3B0B1'
				/>
			</svg>
		</div>
	);
};
	
Search.propTypes = {
	onChangeInput: PropTypes.func,
	inputValue: PropTypes.string,
};

export default Search;
