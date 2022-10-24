import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ ticket }) => {
    return (
        <div className='col-md-3'>
            <div className="card w-80 mt-5 d-flex align-items-center">
                <img src={ticket.img} className="card-img-top w-60" alt="Imagen."/>
                <div className="card-body">
                    <h5 className="card-title text-center">{ticket.name}</h5>
                    <p className="card-text text-center"><b>${ticket.price}</b></p>
                    <p className="card-text text-center"><small className="text-muted">{ticket.category}</small></p>
                    <Link to={`/item/${ticket.id}`} className="btn btn-primary">Ver descripción</Link>
                </div>
            </div>
        </div>
    );
}