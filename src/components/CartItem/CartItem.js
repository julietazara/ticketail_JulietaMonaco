import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Ticket } from '../Ticket/Ticket';

export const CartItem = () => {
    const {cart} = useCartContext();

    if(cart.length === 0){
        return (
            <div>
                <h3>No hay productos en el carrito</h3>
            </div>
        )
    } else{
        return (
            <div>
                {
                    cart.map(ticket => <Ticket ticket={ticket} key={ticket.id}/>)
                }
            </div>
        )
    }
}
