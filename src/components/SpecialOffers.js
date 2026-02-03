import React from 'react';
import './SpecialOffers.css';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const SpecialOffers = () => {
  const { addToCart } = useCart();

  // Pick a few products to feature as special offers (first 3 for now)
  const featured = products.slice(0, 3);

  return (
    <section className="special-offers">
      <div className="special-offers-inner">
        <div className="special-offers-text">
          <h2>Limited Time Offer</h2>
          <p className="special-subtitle">Upgrade your workspace and save more.</p>
          <ul className="special-benefits">
            <li>Up to 30% off selected accessories</li>
            <li>Free shipping on orders over $150</li>
            <li>Extended 30-day return policy</li>
          </ul>
          <p className="special-timer">Today only – don't miss out!</p>
        </div>

        <div className="special-offers-highlight">
          <div className="special-badge">SPECIAL</div>
          <p className="special-highlight-text">
            Bundle any 3 items and get an extra <span>15% OFF</span> at checkout.
          </p>
          <div className="special-offers-products">
            {featured.map((product) => (
              <div key={product.id} className="special-offer-card">
                <div className="special-offer-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="special-offer-image"
                  />
                </div>
                <div className="special-offer-info">
                  <h3 className="special-offer-name">{product.name}</h3>
                  <p className="special-offer-price">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    className="special-offer-button"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;