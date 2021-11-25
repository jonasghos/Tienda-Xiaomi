import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import  {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
 
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:catId" element= {<ItemListContainer/>}></Route>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
