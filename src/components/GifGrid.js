import React from 'react';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

/**
 * En este componente hacemos uso del custom hook, el cual retorna data y loading
 */
export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	/**
	 * El uso del operador && es una manera abreviada de hacer un if simple
	 * Por ejemplo, si queremos decir algo como esto:
	 * 		if(edad>18){
	 * 			console.log('Usted es mayor de edad')
	 * 		}
	 * Podriamos colocarlo en una sola linea de la siguiente manera:
	 * 		edad>18 && console.log('Usted es mayor de edad')
	 */
	return (
		<>
			<h3>{category}</h3>
			{loading && (
				<p className="animate__animated animate__flash">Loading</p>
			)}
			<div className="card-grid">
				{images.map((img) => (
					/**
					 * Nuevamente vemos el operador Spread, analicemos un poco
					 * En este map, el elemento sobre el cual se esta iterando es img, este contiene 3 datos:
					 *  -> id, title, url
					 * Al ser esto una clase de lista, cada elemento debe tener una key unica, para esto usamos img.id
					 * Pero es el unico valor de img que ocupamos aqui, el resto de valores se pasan por parametro
					 * 													'-----...img------'
					 * Siempre que digamos "el resto de..." podemos usar el operador spread
					 * En este caso, el resto en img serian los valores del url y title
					 */
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
