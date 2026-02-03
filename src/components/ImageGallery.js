import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&q=80',
      alt: 'Modern shopping experience'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop&q=80',
      alt: 'Product showcase'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&q=80',
      alt: 'Customer service'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&q=80',
      alt: 'Team collaboration'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop&q=80',
      alt: 'Store interior'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80',
      alt: 'Happy customers'
    }
  ];

  return (
    <section className="image-gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Store Gallery</h2>
        <p className="gallery-subtitle">Take a look at our amazing products and shopping experience</p>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
