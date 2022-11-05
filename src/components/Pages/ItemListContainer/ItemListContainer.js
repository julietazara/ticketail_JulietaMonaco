import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../ItemList/ItemList';


export const ItemListContainer = ({ greeting }) => {

    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)

    const{idCategory} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'ticket')
        if(idCategory){
            const queryFilter = query(queryCollection, where('category', '==', idCategory))
            getDocs(queryFilter)
            .then( resp => setTickets(resp.docs.map( tick => ({ id: tick.id, ...tick.data() }) )) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }else{
            getDocs(queryCollection)
            .then( resp => setTickets(resp.docs.map( tick => ({ id: tick.id, ...tick.data() }) )) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    },[idCategory])
    
    return (
        <div className="container my-5 py-5">
            <div>
                { loading ?
                    <h1 className='my-5 py-5 text-center'><b>Cargando...</b></h1>
                        :
                    <ItemList tickets = {tickets}/>
                }
            </div>
        </div>
    );
}