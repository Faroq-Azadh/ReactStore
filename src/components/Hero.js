import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Store</h1>
          <p className="hero-subtitle">Discover premium products for your modern lifestyle</p>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop&q=80" 
            alt="Modern shopping experience" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
