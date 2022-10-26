import React from 'react';
import { BsCartFill } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './cartWidget.css'

export const CartWidget=()=>{
    const [contador, setContador] = useState(0);

    return(
        <div>
            <button type="button" class="btn btn-light position-relative">
                <Link to={'/cart'}>
                    <BsCartFill size={'1.5em'}/>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {contador}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </Link>
            </button>
        </div>
    );
}