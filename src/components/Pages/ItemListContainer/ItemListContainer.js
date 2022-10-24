import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = ({ greeting }) => {

    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)

    const{idCategory} = useParams()

    useEffect(() => {
        if(idCategory){
            gFetch()
            .then(res => setTickets(res.filter(tic => tic.category === idCategory)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }else{
            gFetch()
            .then(res => setTickets(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    }, [idCategory])
    return (
        <div>
            <h2>{greeting}</h2>
            <div>
                { loading ?
                    <h5>Cargando...</h5>
                        :
                    //tickets.map( ticket  => <ItemList ticket = {ticket ? ticket : true} key={ticket.id}/>)
                    <ItemList tickets = {tickets}/>
                }
            </div>
        </div>
    );
}