import React from 'react';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

describe('Pruebas en GifGrid', () => {
	const category = '';
	const wrapper = shallow(<GifGrid category={category} />);

	test('Debe de renderizar el componente de manera adecuada', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
