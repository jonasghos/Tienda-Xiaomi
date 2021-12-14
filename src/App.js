import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import  {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import {CartProvider} from './components/cartContext/CartContext';
import { CartView } from './components/cartView/CartView';
import { CheckOut } from './components/checkOut/CheckOut';


 
function App() {

 
  return (
    <CartProvider>

      <BrowserRouter>

          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:catId" element= {<ItemListContainer/>}></Route>
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
            <Route path= "/cart" element = {<CartView/>}/>
            <Route path= "/checkout" element = {<CheckOut/>}/>
          </Routes>

      </BrowserRouter>

    </CartProvider>
    )
}

export default App;
