import './App.css';
import React from 'react';
import { ItemListContainer } from './components/Pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { NotFound } from './components/NotFound/NotFound'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <hr></hr>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenid@!'/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer greeting='Bienvenid@!'/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/404' element={<NotFound/>}/>

        <Route path='*' element={<Navigate to='/404'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
