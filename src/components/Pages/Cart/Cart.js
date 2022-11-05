import React, { useEffect, useState } from 'react'
import { CartItem } from '../../CartItem/CartItem'
import { useCartContext } from '../../../context/CartContext';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import './cart.css';

export const Cart = () => {
    const{clearCart, subtotal, cart} = useCartContext()
    const[total, setTotal] = useState(subtotal)
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    useEffect(() => {
        setTotal(subtotal)
    }, [subtotal])

    const genOrder = async(e) => {
        e.preventDefault();
        const order = {
            buyer: {
                name: dataForm.name,
                phone: dataForm.phone,
                email: dataForm.email
            },
            item: cart.map(ticket => {
                const {id, name: title, price, cantidad} = ticket
                return {id, title, price, cantidad}
            }),
            total: subtotal()
        }
        //Subir carrito
        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, order)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => clearCart)

        //Actualizar carrito con batch. No funciona :(
        const queryCollection = collection(db, 'item')
        const queryUpdateStock = await query(
            queryCollection,
            where(documentId(), 'in', cart.map(ticket => ticket.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
        .then(res => res.docs.forEach(resp => batch.update(resp.ref, {
            stock: resp.data().stock - cart.find(ticket => ticket.id === resp.id).cantidad
        })))

        batch.commit()
    }

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        
    }

    return (
        <div className="container my-5 py-5">
            <h1 className="my-5"><b>CARRITO DE COMPRAS</b></h1>
            <div className="card p-3">
                <div className="row">
                    <h4 className="col-md-9">PRODUCTO</h4>
                    <h4 className="col-md-3">SUBTOTAL</h4>
                </div>
                <div>
                    <CartItem/>
                </div>
                <hr></hr>
                {
                    total === 0 ?
                    ''
                    :
                    <h4 className="text-end">Total a pagar: ${total}</h4>
                }
                <div className="text-center">
                    <button type="button" className="btn btn-dark mx-2 cartBtn" onClick={clearCart}> 
                        <h5 className="d-inline-block mx-2">VACIAR CARRITO</h5>
                    </button>
                </div>
                <form onSubmit={genOrder} className='text-center m-3'>
                    <div className='text-center m-3 input-group'>
                        <input type="text" name="name" value={dataForm.name} placeholder="Nombre..." className='form-control' onChange={handleInputChange}/>
                        <input type="text" name="phone" value={dataForm.phone} placeholder="Teléfono..." className='form-control' onChange={handleInputChange}/>
                        <input type="text" name="email" value={dataForm.email} placeholder="Email..." className='form-control' onChange={handleInputChange}/>
                        <button type="button" className="btn btn-dark mx-2 cartBtn" onClick={genOrder}> 
                            <h5 className="d-inline-block mx-2">COMPRAR</h5>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}