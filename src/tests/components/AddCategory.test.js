import React from 'react';
import '@testing-library/jest-dom'; // <- Simplemente para tener autocompletado en nuestro codigo

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {
	/**
	 * Importante: el beforeEach es necesario porque necesitamos que el componente se encuentre 'limpio' a la hora de hacer las pruebas, por lo que declaramos el wrapper fuera de las pruebas pero lo limpiamos cada vez que inicializamos una prueba con el beforeEach.
	 * Sin embargo, al simplemente declararlo como undefined, perdemos todo tipo de ayuda de vscode, por lo que es mejor declararla como el shallow del componente
	 */

	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test('Debe de mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de cambiar la caja de texto al escribir', () => {
		// Alojamos el valor de ese input dentro de una constante
		const input = wrapper.find('input');
		// Esto es lo que vamos a simular escribir dentro de nuestro input
		const value = 'Hola Mundo';
		/**
		 * Para comprender esto, debemos de saber que se esta generando un evento (e), el cual tiene un target
		 * Naturalmente, el target contiene un valor que es el que debemos de mandar, simulando que lo hemos escrito nosotros
		 */
		input.simulate('change', { target: { value } });
		/**
		 * El valor del siguiente 'p' es igual al que tiene el input, sin embargo este no tiene otra funcion mas que comprobar que nuestro test pasa
		 */
		expect(wrapper.find('p').text().trim()).toBe(value);
	});

	test('No debe de postear la informacion onSubmit si el input.lenght < 2', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
		const value = 'Sample text';
		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledTimes(1);
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
