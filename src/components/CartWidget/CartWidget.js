import React, { useState, useEffect } from 'react';
import { BsCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './cartWidget.css'

export const CartWidget = () => {
    const {cantTickets} = useCartContext();
    const [cantidad, setCantidad] = useState(cantTickets());

    useEffect(() => {
        setCantidad(cantTickets());
    },[cantTickets()])

    return(
        <div>
            <Link to={'/cart'}>
                <button type="button" className="btn btn-light position-relative">
                    <BsCartFill size={'1.5em'}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {cantidad}
                    </span>
                </button>
            </Link>
        </div>
    );
}