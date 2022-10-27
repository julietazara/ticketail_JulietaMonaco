import React, { useState, useEffect } from 'react';
import { BsCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext';
import './cartWidget.css'

export const CartWidget = () => {
    const {cantTicket} = useCartContext();
    const [cantidad, setCantidad] = useState(cantTicket());

    useEffect(() => {
        setCantidad(cantTicket());
    },[cantTicket()])

    return(
        <div>
            <button type="button" className="btn btn-light position-relative">
                <Link to={'/cart'}>
                    <BsCartFill size={'1.5em'}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {cantidad}
                    </span>
                </Link>
            </button>
        </div>
    );
}