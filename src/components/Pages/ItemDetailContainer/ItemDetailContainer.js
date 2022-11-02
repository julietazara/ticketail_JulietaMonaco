import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import './itemDetailContainer.css';

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
        <div className="container-fluid my-5 py-5">
            <div className='row'>
                { loading ?
                    <h1 className='my-5 py-5 text-center'><b>Cargando...</b></h1>
                        :
                    <ItemDetail ticket = {ticket ? ticket : true}/>
                }
            </div>
        </div>
    );
}