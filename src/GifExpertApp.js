import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

// Esto es un Functional Component
const GifExpertApp = () => {
	/**
	 * Normalmente las constantes que necesitamos que se encuentren en otros componentes, los ponemos dentro de hooks
	 * Para poder hacer un hook mucho mas rapido podemos usar el snippet _ush_ el cual nos crea el hook
	 * Nota: para poder usar el hook, debemos importar el useState de React
	 */
	const [categories, setCategories] = useState([
		'Gumball',
		'Hora de aventura',
		'Un show mas',
	]);

	/**
	 * Todos los functional components deben retornar una estructura HTML que sera agregada al DOM
	 * Dentro de estos componentes podemos agregar otros componentes como se muestra a continuacion
	 */
	return (
		<>
			<h1>GifExpertApp</h1>
			<hr />
			<AddCategory setCategories={setCategories} />
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
		</>
	);
};

export default GifExpertApp;
