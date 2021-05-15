/**
 * Funcion encargada de consultar en la API el valor recibido por parametro
 * Podemos identificar 3 cosas importantes:
 * 	1. Esta debe de ser una funcion async, ya que la peticion tarda en realizarse
 * 	2. El encodeURI funciona para darle el formato correcto a la busqueda que se realice
 * 	3. La desestructuracion de objetos es vital para poder darle el formato deseado al valor recibido
 * La respuesta de la API tiende a contener mucha informacion que realmente no necesitamos
 * Por lo que la desestructuracion nos ayuda a crear nuevos objetos a partir de la data recibida
 */
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
