import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ReactStore</h1>
          <p className="hero-subtitle">Discover premium products for your modern lifestyle</p>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&q=80" 
            alt="Minimalistic shopping" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
