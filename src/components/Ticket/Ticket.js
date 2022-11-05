import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './ticket.css';

export const Ticket = ({ticket}) => {
    const {addToCart, removeTicket} = useCartContext();

    const incTicket = () => addToCart(ticket, 1)
    const decTicket = () => addToCart(ticket, -1)
    const remTicket = () => removeTicket(ticket.id)
    
    return (
        <div className='row'>
            <div className='col-md-8 p-3'>
            <div className="d-flex align-items-center">
                <Link to={'/item/'+ticket.id}><img src={ticket.img} className="card-img-top cartImg" alt="Imagen."/></Link>
                    <div className="mx-5">
                        <h5 className="card-title text-left">Ticket: {ticket.name}</h5>
                        <h6 className="card-text text-left"><b>Precio: ${ticket.price} c/u</b></h6>
                        <h6 className="card-text text-left">
                            <button disabled={ticket.cantidad <= 0} type="button" className="btn btn-dark mx-2" onClick={decTicket}>-</button>
                            {ticket.cantidad}
                            <button disabled={ticket.stock <= ticket.cantidad} type="button" className="btn btn-dark mx-2" onClick={incTicket}>+</button>
                        </h6>
                    </div>
                </div>
            </div>
            <div className='col-md-3 p-3 d-flex'>
                <h4 className='align-self-center'>${ticket.cantidad * ticket.price}</h4>
            </div>
            <div className='col-md-1 p-3 d-flex'>
                <button type="button" className="btn btn-dark mx-2 align-self-center" onClick={remTicket}>X</button>
            </div>
        </div>
    )
}
