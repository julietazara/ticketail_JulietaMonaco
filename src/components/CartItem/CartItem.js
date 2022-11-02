import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Ticket } from '../Ticket/Ticket';

export const CartItem = () => {
    const {cart} = useCartContext();
    return (
        <div>
            {
                cart.map(ticket => <Ticket ticket={ticket} key={ticket.id}/>)
            }
        </div>
    )
}
