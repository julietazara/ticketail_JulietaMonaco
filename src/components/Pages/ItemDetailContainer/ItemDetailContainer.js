import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [ticket, setTicket] = useState([])
    const [loading, setLoading] = useState(true)

    const{idItem} = useParams()

    useEffect(() => {
        gFetch()
        .then(res => setTicket(res.find(tic => tic.id === idItem)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    return (
        <div>
            <div className='row'>
                { loading ?
                    <h5>Cargando...</h5>
                        :
                    <ItemDetail ticket = {ticket ? ticket : true}/>
                }
            </div>
        </div>
    );
}