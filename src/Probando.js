import React, { useState } from 'react';

const Probando = ({ nuevaFruta = 'papaya' }) => {
	const [frutas, setFrutas] = useState(['banano', 'manzana', 'limon']);

	const handleAdd = () => {
		setFrutas((frutas) => [...frutas, nuevaFruta]);
	};

	return (
		<>
			<h1>Frutas</h1>
			<hr />

			<ol>
				{frutas.map((fruta) => {
					return <li key={fruta}>{fruta}</li>;
				})}
			</ol>

			<button onClick={handleAdd}>Add new fruit</button>
		</>
	);
};

export default Probando;
