import React from 'react';
import { BsCartFill } from "react-icons/bs";
import { useState } from 'react';

export const CartWidget=()=>{
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    }

    return(
        <div>   
            <a className="nav-link" href="#">{contador} <BsCartFill/> <button onClick = {handleClick}>+</button></a>
        </div>
    );
}