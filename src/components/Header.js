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

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🛍️ ReactStore</h1>
        </div>
        <nav className="nav">
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
