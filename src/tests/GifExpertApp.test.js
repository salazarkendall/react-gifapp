/**
 * Las importaciones por defecto no llevan {}
 * Las importaciones comunes deben de llevar {} por defecto
 */

import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
	let wrapper = shallow(<GifExpertApp />);

	test('Debe de hacer match el shallow con el snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
