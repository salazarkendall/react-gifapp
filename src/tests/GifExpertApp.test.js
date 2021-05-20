import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

/**
 * Las importaciones por defecto no llevan {}
 * Las importaciones comunes deben de llevar {} por defecto
 */

/**
 * Esta es la prueba mas normal que podemos hacer para darnos cuenta si un componente es renderizado de la manera ideal
 */
describe('Pruebas en GifExpertApp', () => {
	let wrapper = shallow(<GifExpertApp />);

	test('Debe de hacer match el shallow con el snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
