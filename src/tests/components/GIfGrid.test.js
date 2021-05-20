import React from 'react';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
	const category = 'Death note';

	test('Debe de renderizar el componente de manera adecuada', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('h3').text().includes(category)).toBe(true);
	});

	test('Debe de mostrar items cuando se cargan las imagenes usando useFetchGifs', () => {
		const gifs = [
			{
				id: 'test',
				title: 'Todo bien?',
				url: 'https://localhost.hola',
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchInlineSnapshot();
	});
});
