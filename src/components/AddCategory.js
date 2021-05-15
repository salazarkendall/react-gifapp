import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Este es el Functional Component encargado del funcionamiento del input
 * Se debe encargar de tomar el valor digitado y pasarlo al hook de setCategories (En GifExpertApp)
 */
export const AddCategory = ({ setCategories }) => {
	/**
	 * Lo siguiente es un hook comun, encargado de la funcionalidad del input
	 * El valor que se le asigna por defecto es un string vacio
	 */
	const [inputValue, setInputValue] = useState('');

	/**
	 * Por convencion, los eventos se nombran como handle+eventName
	 * El cual recibe por parametro el evento que se realiza
	 * Los 2 siguientes handlers se encargan de renderizar lo que el usuario escribe
	 * y de darle la funcionalidad indicada cuando el usuario presione ENTER
	 */
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			/**
			 * Como entender el operador spread?
			 * Podriamos entenderlo como "...y todos los demas..."
			 * En este caso, el inputValue representa la nueva categoria
			 * El operador Spread se encuentra con el valor de categorias, las ya existentes
			 * En un sentido sintactico, podriamos leerlo como:
			 * -> La nueva categoria junto con todas las demas
			 * 	  '---inputValue---'       '--...categories--'
			 */
			setCategories((categories) => [inputValue, ...categories]);
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
