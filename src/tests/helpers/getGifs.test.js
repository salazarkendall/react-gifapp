import { getGifs } from '../../helpers/getGifs';

/**
 * En esta prueba unicamente debemos probar que la peticion a la API de giphy de da de manera exitosa
 * Por lo que no ocupamos la importacion de React
 */

describe('Pruebas en getGifs.js', () => {
	test('Debe de traer 10 elementos', async () => {
		const gifs = await getGifs('one punch');
		expect(gifs.length).toBe(10);
	});

	test('Debe retornar un arreglo vacio si no se especifica la categoria', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});
