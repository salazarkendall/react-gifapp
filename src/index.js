import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';

/**
 * Esta es la linea principal que conecta nuestro HTML con el primer componente de nuestra aplicacion de React
 * Se conforma de 2 partes:
 *  -> Que queremos renderizar en pantalla?
 *  -> Donde queremos renderizarlo?
 * Por convecion, debemos de renderizar el componente padre de nuestra app dentro del elemento root que se encuentra en el HTML
 */
ReactDOM.render(<GifExpertApp />, document.getElementById('root'));
