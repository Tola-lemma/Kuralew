// components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

function ProductCard({ image, title, price, colors }) {
  return (
    <div className="custom-card">
      <div className="card-dot-wrapper">
        {colors.map((color, idx) => (
          <span key={idx} className="color-dot" style={{ backgroundColor: color }}></span>
        ))}
      </div>
      <img src={image} alt={title} className="card-image" />
      <h4 className="card-title">{title}</h4>
      <p className="card-price">${price}</p>
    </div>
  );
}

export default ProductCard;
