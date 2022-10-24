import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({ tickets }) => {
    return (
        <div className='row'>
            {
                tickets.map( ticket  => <Item ticket = {ticket ? ticket : true} key={ticket.id}/>)
            }
        </div>
    )
}
