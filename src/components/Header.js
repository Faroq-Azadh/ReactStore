import React, { useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { cartItems, getTotalItems, setIsCartOpen } = useCart();
  const { user, setIsLoginOpen, setIsRegisterOpen, setIsProfileOpen } = useAuth();

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  }, [cartItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <h1>🛍️ My Store</h1>
        </div>
        <nav className="nav">
          <div className="nav-links">
            <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
            <button className="nav-link" onClick={() => scrollToSection('products')}>Products</button>
            <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
          {user ? (
            <button className="account-button" onClick={() => setIsProfileOpen(true)}>
              <span className="account-icon">👤</span>
              <span className="account-text">{user.name}</span>
            </button>
          ) : (
            <div className="auth-buttons">
              <button className="login-button" onClick={() => setIsLoginOpen(true)}>
                Login
              </button>
              <button className="register-button" onClick={() => setIsRegisterOpen(true)}>
                Sign Up
              </button>
            </div>
          )}
          <button className="cart-button" onClick={() => setIsCartOpen(true)}>
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
