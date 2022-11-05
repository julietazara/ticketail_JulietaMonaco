import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import './itemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [ticket, setTicket] = useState([])
    const [loading, setLoading] = useState(true)

    const{idItem} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'ticket', idItem)
        if(idItem){
            getDoc(queryDoc)
            .then( resp => setTicket({id: resp.id, ...resp.data()}) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    },[idItem])

    // useEffect(() => {
    //     gFetch()
    //     .then(res => setTicket(res.find(tic => tic.id === idItem)))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false))
    // }, [])
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