import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

/**
 * Este es nuestro custom hook: useFetchGifs, como funciona?
 * 1. Recibe una categoria de la busqueda por gifs
 * 2. Nuestro custom hook tiene un hook normal, cuyo useState va a contener la data y el loading
 * 3. Dentro de este tambien encontramos un useEffect, que tambien es un hook, que se encarga de:
 * 		3.a. Tomar la categoria recibida por parametros
 * 		3.b. Mandarla al getGifs, la cual es una funcion que realiza una peticion HTTP al API de giphy
 * 		3.c. El return se almacena dentro del hook state, en la parte de data, ademas de que se cambia el loading a false
 * 		3.d. Recordemos que los useEffect solo se llaman 1 vez y tienen dependencias
 * 4. Por ultimo, el state es el valor que se retorna, el cual contiene la data y el loading
 */
export const useFetchGifs = (category) => {
	/**
	 * El state puede contener cualquier cosa, desde un string vacio hasta un objeto como en este caso
	 */
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	/**
	 * Normalmente las peticiones tardan en realizarse, al menos unos cuantos segundos
	 * En este caso el setTimeout es innecesario y solo sirve para fines ilustrativos
	 */
	useEffect(() => {
		getGifs(category).then((gifs) => {
			setTimeout(() => {
				setState({
					data: gifs,
					loading: false,
				});
			}, 1000);
		});
	}, [category]);

	/**
	 * Este valor de retorno contiene toda la informacion de los nuevos gifs que seran mostrados en pantalla
	 */
	return state;
};
