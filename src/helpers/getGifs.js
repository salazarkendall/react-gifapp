export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=GGTJKrckkPhdSGdOc5ZFbTgpFCrcuuNp`;
	const respuesta = await fetch(url);
	const { data } = await respuesta.json();

	const gifs = data.map((imagen) => {
		return {
			id: imagen.id,
			title: imagen.title,
			url: imagen.images?.downsized_medium.url,
		};
	});
	return gifs;
};
