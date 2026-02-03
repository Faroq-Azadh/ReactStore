import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <ProductList />
        </main>
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;
