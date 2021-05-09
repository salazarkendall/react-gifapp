import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Este es el Functional Component encargado del funcionamiento del input
 */
export const AddCategory = ({ setCategories }) => {
	/**
	 * Lo siguiente es un hook comun, encargado de la funcionalidad del input
	 */
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories((categories) => [...categories, inputValue]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
