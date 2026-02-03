import React from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getTotalItems, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🛍️ ReactStore</h1>
        </div>
        <nav className="nav">
          <button className="cart-button" onClick={() => setIsCartOpen(true)}>
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
