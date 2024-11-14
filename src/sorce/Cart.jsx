import React, { useState, useEffect } from 'react';
import "./cart.css";
import Navbar from './Navbar';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // adding
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // removing
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // price calculation
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {/* Render Navbar */}
      <Navbar />
      
      <div className="cart-container">
        <h2>Your Cart</h2>

        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} />
                  {item.name}
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => addToCart({ ...item, quantity: item.quantity + 1 })}>+</button>
                  {item.quantity}
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: ${calculateTotalPrice().toFixed(2)}</p>
          <p>Shipping: Free</p>
          <p><strong>Total: ${calculateTotalPrice().toFixed(2)}</strong></p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
 

