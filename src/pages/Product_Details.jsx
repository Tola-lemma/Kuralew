import React from 'react';
import './product_Details.css';
import ProductCard from '../components/ProductCard';
import demo from '../assets/demo.png';
import { FaStar, FaTruck } from 'react-icons/fa';

const reviews = [
    {
      user: 'alexh',
      rating: 5,
      comment: 'Great shoe! Very comfy and stylish as well.',
      time: '3 days ago'
    },
    {
      user: 'Ameli',
      rating: 4,
      comment: 'Good shoes',
      time: '5 days ago'
    },
    {
      user: 'Imrat',
      rating: 4,
      comment: 'great footwear.',
      time: '1 week ago'
    },
    {
      user: 'Ziyad T',
      rating: 5,
      comment: 'Top notch! 😍',
      time: '1 week ago'
    },
  ];
  
  const ratingStats = [
    { stars: 5, count: 8 },
    { stars: 4, count: 3 },
    { stars: 3, count: 1 },
    { stars: 2, count: 0 },
    { stars: 1, count: 1 },
  ];
const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Main Product Section */}
      <div className="product-main">
        {/* Left Column: Main Image and Thumbnails */}
        <div className="product-left-column">
          <div className="product-image-section">
            <img
              src={demo}
              alt="Product"
              className="main-product-image"
            />
          </div>
          <div className="thumbnails">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={demo}
                alt="thumb"
                className="thumbnail"
              />
            ))}
            <button className="more-thumbs">+ More</button>
          </div>
        </div>

        {/* Right Column: Product Details and Delivery Info */}
        <div className="product-right-column">
          <div className="product-details">
            <h2 className="product-title1">Product name</h2>
            <div className="rating-section">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="review-count">(100 reviews)</span>
            </div>
            <p className="product-price">$199.00</p>
            <p className="product-description">
              A placeholder or dummy text used in graphic design, publishing, and web development to demonstrate the visual aspects of a layout or typeface without relying on meaningful content.
              A placeholder or dummy text used in graphic design, publishing, and web development to demonstrate the visual aspects of a layout or typeface without relying on meaningful content.
              </p>
              <div className="button-section">
  <div className="btns-row">
    <button className="add-to-cart">Add to Cart</button>
    <div className="wishlist-button">❤️</div>
  </div>
  <button className="checkout">Checkout</button>
</div>
          </div>
          <div className="free-delivery">
            <span role="img" aria-label="truck">🚚</span>
            Free delivery on orders over $50
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="review-section">
      <div className="review-left">
        <div className="tabs">
          <span className="tab">Details</span>
          <span className="tab active">Reviews</span>
          <span className="tab">Discussion</span>
        </div>

        <div className="reviews">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-header">
                <strong>{review.user}</strong>
                <div className="stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="star-filled" />
                  ))}
                </div>
              </div>
              <p className="comment">{review.comment}</p>
              <span className="review-time">{review.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="review-right">
        <div className="rating-summary">
          <div className="stars-row">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="star-filled" />
            ))}
            <span className="rating-score">4.8</span>
          </div>
          {ratingStats.map((stat, index) => (
            <div className="rating-bar" key={index}>
              <span>{stat.stars}</span>
              <div className="bar">
                <div className="fill" style={{ width: `${(stat.count / 8) * 100}%` }}></div>
              </div>
              <span>{stat.count}</span>
            </div>
          ))}
        </div>

        <div className="promo-card">
          <p className="promo-text">Popular brands<br />with discounts<br /> <span className="highlight">over 25%</span></p>
          <div className="promo-logos">
            <div className="logo-circle" />
            <div className="logo-circle" />
            <div className="logo-circle" />
            <div className="logo-circle" />
          </div>
          <button className="promo-btn">View More</button>
        </div>
      </div>
    </div>
    <div className='card-row '>
    <ProductCard
    image= {demo}
    title="Hoka One One Running Shoes"
    price="180.00"
    colors={['#000', '#f00', '#fff']}
  />
  <ProductCard
    image= {demo}
    title="Legacy Lifter II Weightlifting Shoes"
    price="220.00"
    colors={['#00a693', '#fff']}
  />
  <ProductCard
    image= {demo}
    title="Men’s Holiday Capsule Leather"
    price="9720.00"
    colors={['#000', '#003', '#fff']}
  />
  <ProductCard
    image= {demo}
    title="LV Trainer Trick Sneaker"
    price="520.00"
    colors={['#f00', '#000', '#fff']}
  />
    </div>
    
  
    </div>
  );
};

export default ProductPage;