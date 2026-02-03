import React from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ImageGallery from './components/ImageGallery';
import About from './components/About';
import Contact from './components/Contact';
import ShoppingCart from './components/ShoppingCart';
import SpecialOffers from './components/SpecialOffers';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <main className="main-content">
            <Hero />
            <SpecialOffers />
            <ProductList />
            <ImageGallery />
            <About />
            <Contact />
          </main>
          <Footer />
          <ShoppingCart />
          <Login />
          <Register />
          <UserProfile />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
