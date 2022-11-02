import React from 'react'; 
import error from '../../assets/images/error-404.png';
import think from '../../assets/images/thinking.png';
import "./notFound.css";

export const NotFound = () => {
    return (
        <div className="container-fluid my-5 py-5 text-center">
            <img src={error} className="imagen my-5" alt="Imagen."/>
            <h1 className="my-5"><b>Oops... No se encontró la página que buscabas. Intente nuevamente con otra dirección.</b></h1>
            <img src={think} className="imagen my-5" alt="Imagen."/>
        </div>
    );
}
