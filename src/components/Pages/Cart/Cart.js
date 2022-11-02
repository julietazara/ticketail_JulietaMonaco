import React, { useEffect, useState } from 'react'
import { CartItem } from '../../CartItem/CartItem'
import { useCartContext } from '../../../context/CartContext';
import './cart.css';

export const Cart = () => {
    const{clearCart, subtotal} = useCartContext();
    const[total, setTotal] = useState(subtotal);

    useEffect(() => {
        setTotal(subtotal);
    }, [subtotal])

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
                <h4 className="text-end">Total a pagar: ${total}</h4>
                <button type="button" className="btn btn-dark mx-2 cartBtn text-center align-self-center" onClick={clearCart}> 
                    <h5 className="d-inline-block mx-2">VACIAR CARRITO</h5>
                </button>
            </div>
        </div>
    )
}