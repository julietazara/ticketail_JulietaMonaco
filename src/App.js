import './App.css';
import React from 'react';
import { ItemListContainer } from './components/Pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Pages/Cart/Cart';
import { NavBar } from './components/NavBar/NavBar';
import { NotFound } from './components/NotFound/NotFound'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenid@!'/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/404' element={<NotFound/>}/>
          <Route path='*' element={<Navigate to='/404'/>}/>
        </Routes>
      </CartProvider>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
