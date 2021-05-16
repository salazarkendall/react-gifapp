import React from 'react';
import PropTypes from 'prop-types';
/**
 * Se encarga de darle la estructura HTML a cada uno de los gifs que se mostraran en pantalla
 * Los unicos valores recibidor por parametro son title y url porque asi fue especificado al usar el operador spread
 */
export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
