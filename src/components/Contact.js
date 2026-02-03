import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'subject':
        if (!value.trim()) {
          error = 'Subject is required';
        } else if (value.trim().length < 3) {
          error = 'Subject must be at least 3 characters';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate field when user types
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {
      name: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // In a real app, this would send data to a backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-image-gallery">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80" 
                alt="Customer service" 
                className="gallery-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&q=80" 
                alt="Team collaboration" 
                className="gallery-image"
              />
            </div>
            <div className="info-block">
              <span className="info-icon">📧</span>
              <h3>Email</h3>
              <p>support@mystore.com</p>
              <p>info@mystore.com</p>
            </div>

            <div className="info-block">
              <span className="info-icon">📞</span>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri: 9am - 6pm EST</p>
            </div>

            <div className="info-block">
              <span className="info-icon">📍</span>
              <h3>Address</h3>
              <p>123 Commerce Street</p>
              <p>New York, NY 10001</p>
            </div>

            <div className="info-block">
              <span className="info-icon">💬</span>
              <h3>Social Media</h3>
              <div className="social-contact">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? 'input-error' : ''}
                    placeholder="Your name"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? 'input-error' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.subject ? 'input-error' : ''}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message ? 'input-error' : ''}
                  rows="6"
                  placeholder="Tell us more..."
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact-form-image">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=400&fit=crop&q=80" 
            alt="Contact us" 
            className="contact-bottom-image"
          />
        </div>

        <div className="contact-additional-info">
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🕒</div>
              <h3>Store Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 8:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="card-icon">❓</div>
              <h3>Frequently Asked Questions</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <strong>How long does shipping take?</strong>
                  <p>Standard shipping takes 3-5 business days. Express shipping available (1-2 days).</p>
                </div>
                <div className="faq-item">
                  <strong>What is your return policy?</strong>
                  <p>We offer a 30-day hassle-free return policy on all unused items in original packaging.</p>
                </div>
                <div className="faq-item">
                  <strong>Do you offer international shipping?</strong>
                  <p>Yes! We ship worldwide. Shipping costs and times vary by location.</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="card-icon">💳</div>
              <h3>Payment Methods</h3>
              <div className="payment-methods">
                <span className="payment-icon">💳</span>
                <span className="payment-icon">📱</span>
                <span className="payment-icon">🏦</span>
                <span className="payment-icon">🔐</span>
              </div>
              <p className="payment-text">We accept all major credit cards, PayPal, Apple Pay, and bank transfers.</p>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Need Immediate Assistance?</h3>
            <p>Our customer service team is here to help you 24/7</p>
            <div className="cta-buttons">
              <a href="tel:+15551234567" className="cta-button phone">
                📞 Call Us Now
              </a>
              <a href="mailto:support@mystore.com" className="cta-button email">
                📧 Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
