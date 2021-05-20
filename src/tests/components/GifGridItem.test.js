import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

/**
 * El componente que vamos a probar tiene props que debemos cumplir
 * Por esto, dichos props se definen una unica vez, fuera de todas las pruebas
 */

describe('Pruebas en GifGridItem', () => {
	let title = 'Este es solo un titulo de ejemplo';
	let url = 'url';
	let wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('Se debe de mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('El componente debe de tener un parrafo con el title', () => {
		const p = wrapper.find('p');
		expect(p.text()).toEqual(title);
	});

	test('La imagen debe de tener el url y el alt segun los props', () => {
		const img = wrapper.find('img');
		expect(img.prop('src')).toEqual(url);
		expect(img.prop('alt')).toEqual(title);
	});

	test('La clase del div debe de contener una animacion', () => {
		/**
		 * Estas son 2 formas de hacer lo mismo, pero pueden tener aplicaciones diferentes en el futuro
		 * Lo que realizamos es buscar si un elemento de nuestro componente contiene la clase especificada
		 */
		const div = wrapper.find('div');
		const className = div.prop('className');
		expect(className).toContain('animate__zoomIn');
		expect(className.includes('animate__zoomIn')).toBe(true);
	});
});
