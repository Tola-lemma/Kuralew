// pages/CartPage.jsx
import React, { useState } from 'react';
import './cartpage.css';
import demo from '../assets/demo.png';

const initialItems = [
  { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image:  demo },
  { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: demo },
];

function CartPage() {
  const [cartItems, setCartItems] = useState(initialItems);

  const handleQuantityChange = (id, value) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(value) } : item
    );
    setCartItems(updatedItems);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
  {cartItems.map(item => (
    <tr key={item.id}>
      <td className="product-info" data-label="Product">
        <img src={item.image} alt={item.name} className="product-image" />
        {item.name}
      </td>
      <td data-label="Price">${item.price}</td>
      <td data-label="Quantity">
        <select
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </td>
      <td data-label="Subtotal">${item.price * item.quantity}</td>
    </tr>
  ))}

        </tbody>
      </table>

      <div className="cart-buttons">
        <button className="btn-outline">Return To Shop</button>
        <button className="btn-outline">Update Cart</button>
      </div>

      <div className="cart-lower-section">
        <div className="coupon-box">
          <input type="text" placeholder="Coupon Code" />
          <button className="btn-blue">Apply Coupon</button>
        </div>

        <div className="cart-total-box">
          <h4>Cart Total</h4>
          <p>Subtotal: <span>${subtotal}</span></p>
          <p>Shipping: <span>Free</span></p>
          <hr />
          <p>Total: <span>${subtotal}</span></p>
          <button className="btn-blue full-width">Process to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
