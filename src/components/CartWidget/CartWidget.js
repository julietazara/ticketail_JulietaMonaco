import React from 'react';
import { BsCartFill } from "react-icons/bs";
import { useState } from 'react';

export const CartWidget=()=>{
    const [contador, setContador] = useState(0);
    

    const increase = () => {
        setContador(contador + 1);
    }

    const decrease = () => {
        if(contador > 0){
            setContador(contador - 1);
        }
    }

    return(
        <div>
            <a className="nav-link" href="#">
                <h4 className="d-inline-block mx-2">
                    {contador > 0 ?
                    contador :
                    ''
                    }
                    <BsCartFill size={'1.5em'}/>
                </h4>
            </a>
        </div>
    );
}