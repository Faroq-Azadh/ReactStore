import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import SpecialOffers from './components/SpecialOffers';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <SpecialOffers />
          <ProductList />
        </main>
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;
