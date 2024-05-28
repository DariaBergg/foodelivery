import React from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { SearchProvider } from './SearchContext';
import { CartProvider } from './CartContext';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
  <HashRouter>
    <SearchProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </SearchProvider>
    </HashRouter>
  
);
reportWebVitals();