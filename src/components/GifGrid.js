import React from 'react';

export const GifGrid = ({ category }) => {
	const getGifs = async () => {
		const url = `https://api.giphy.com/v1/gifs/search?q=Dark&limit=10&api_key=GGTJKrckkPhdSGdOc5ZFbTgpFCrcuuNp`;
		const respuesta = await fetch(url);
		const { data } = await respuesta.json();

		const gifs = data.map((imagen) => {
			return {
				id: imagen.id,
				title: imagen.title,
				url: imagen.images?.downsized_medium.url,
			};
		});

		console.log(gifs);
	};

	getGifs();

	return (
		<>
			<h3>{category}</h3>
		</>
	);
};
