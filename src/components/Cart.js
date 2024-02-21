// Cart.js
import React, { useContext } from 'react';
import { ShoppingCartContext, ShoppingCartProvider } from '../context/ShoppingCartContext';

const Cart = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  if (!cartItems) {
    return <div>Loading...</div>; // You can replace this with a loading indicator or any other message
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
