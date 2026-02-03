import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About My Store</h2>
          <p className="about-subtitle">Your trusted partner in premium shopping</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-block">
              <h3>Our Story</h3>
              <p>
                Founded with a vision to revolutionize online shopping, My Store has been 
                delivering exceptional products and unmatched customer service since our inception. 
                We believe that everyone deserves access to high-quality products that enhance 
                their daily lives.
              </p>
            </div>

            <div className="about-block">
              <h3>Our Mission</h3>
              <p>
                To provide our customers with a seamless shopping experience, offering carefully 
                curated products that combine quality, innovation, and value. We're committed to 
                building lasting relationships with our customers through transparency, integrity, 
                and exceptional service.
              </p>
            </div>

            <div className="about-block">
              <h3>Why Choose Us?</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">🚚</span>
                  <h4>Fast Shipping</h4>
                  <p>Free shipping on orders over $150</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔄</span>
                  <h4>Easy Returns</h4>
                  <p>30-day hassle-free return policy</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💎</span>
                  <h4>Quality Products</h4>
                  <p>Carefully selected premium items</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💬</span>
                  <h4>24/7 Support</h4>
                  <p>Round-the-clock customer service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop&q=80" 
              alt="Modern retail store" 
              className="about-store-image"
            />
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" 
              alt="Happy customers shopping" 
              className="about-store-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
