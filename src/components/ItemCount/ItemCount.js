import React from 'react';
import { BsCartFill } from "react-icons/bs";
import { useState } from 'react';


export const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(0);

    const increase = () => {
        if(contador < stock){
        setContador(contador + 1);
    }
    }

    const decrease = () => {
        if(contador > 0){
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <div className="my-2">
                <button onClick = {decrease} type="button" className="btn btn-dark mx-2">-</button>
                <h5 className="d-inline-block mx-2">{contador}</h5>
                <button onClick = {increase} type="button" className="btn btn-dark mx-2">+</button>
            </div>
            <div className="my-2 d-flex justify-content-center">
                <button onClick = {decrease} type="button" className="btn btn-dark mx-2 d-flex align-content-center">
                    <h5 className="d-inline-block mx-2">AGREGAR</h5> <BsCartFill size={'1.5em'}/>
                </button>
            </div>
        </div>
    )
}
