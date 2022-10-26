import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount'
import './itemDetail.css'

export const ItemDetail = ({ ticket }) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (cantidad) => {
        setGoToCart(true);
    }

    return (
        <div className="col-12 d-flex justify-content-center">
            <div className="card w-50 my-5 d-flex align-items-center text-center">
                <img src={ticket.img} className="card-img-top w-60" alt="Imagen."/>
                <div className="card-body">
                    <p className="card-text text-center h5"><small className="text-muted">{ticket.category}</small></p>
                    <h1 className="card-title text-center">{ticket.name}</h1>
                    <h3 className="card-text text-center">Precio <b>${ticket.price}</b> - Stock: {ticket.stock} entradas.</h3>
                    <p className="card-text text-center h4">{ticket.detail}</p>
                    <ItemCount stock={ticket.stock} onAdd={onAdd}/>
                    {
                        goToCart
                        ? <Link to='/cart'><h5><b>Finalizar compra</b></h5></Link>
                        : ''
                    }
                </div>
            </div>
        </div>
    )
}