import React from 'react';
import ReactDOM  from 'react-dom';
import { Routes, Route } from 'react-router-dom'; 
import Header from './Header.js';
import Bakery from './Bakery.js';
import Cocktails from './Cocktails.js';
import Burgers from './Burgers.js';
import Desserts from './Desserts.js';
import Cart from './Cart.js';
import Registration from './registration-form.js';
import { CartProvider } from './CartContext';
import { SearchProvider } from './SearchContext.js';
import SearchResults from './SearchResults.js'
import './App-mobile.css';

export default function App () {
 return (
  <>
    <Routes>
    <Route path="/" element={ <Header />} >
      <Route index element={<Bakery />} />
      {/* <Route path='/bakery' element={<Bakery />} /> */}
      <Route path='/burgers' element={<Burgers />} />
      <Route path='/desserts' element={< Desserts/>} />
      <Route path='/cocktails' element={<Cocktails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path='/registration-form' element={<Registration />} />
      </Route>
  </Routes>
  </>
 );
}