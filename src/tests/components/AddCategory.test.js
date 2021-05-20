import React from 'react';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {
	const setCategory = () => {};
	const wrapper = shallow(<AddCategory setCategories={setCategory} />);

	/**
	 * Nuevamente, el probamos que el componente se renderice de la manera ideal
	 */
	test('Debe de mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	/**
	 * Esta es una prueba mas compleja en donde simulamos que escribimos en un input
	 *
	 */
	test('Debe de cambiar la caja de texto', () => {
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
});
