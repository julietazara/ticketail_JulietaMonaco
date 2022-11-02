import React, { useState, useContext } from 'react';

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);
    const inCart = (id) => cart.find(item => item.id === id) ? true : false;
    const retCart = () => cart;
    const findTicket = (id) => cart.find(item => item.id === id);
    const removeTicket = (id) => setCart(cart.filter(ticket => ticket.id !== id));
    const subtotal = () => {
        let result = 0
        if(cart.length > 0){
            for(let j = 0; j < cart.length; j++){
                result += (cart[j].price * cart[j].cantidad)
            }
        }
        return result
    }
    const addToCart = (ticket, cant) => {
        if(inCart(ticket.id)){
            let itemCart = findTicket(ticket.id)
            let cantidadAct = 0;
            (itemCart.cantidad + cant) >= ticket.stock ? cantidadAct = ticket.stock : cantidadAct = itemCart.cantidad + cant
            setCart(cart.map( mapTicket => {
                return mapTicket.id === ticket.id ? {...mapTicket, cantidad : cantidadAct} : mapTicket
            }))
        }else{
            setCart([...cart, {...ticket, cantidad : cant}])
        }
    }
    const cantTickets = () => {
        let cantidad = 0
        if(cart.length > 0){
            for(let i = 0; i < cart.length; i++){
                cantidad += cart[i].cantidad
            }
        }
        return cantidad
    }
    return (
        <CartContext.Provider value={{
            cart,
            clearCart,
            inCart,
            retCart,
            findTicket,
            removeTicket,
            subtotal,
            addToCart,
            cantTickets,
        }}>
            {children}
        </CartContext.Provider>
    )
}
