import React, { useContext } from 'react';
import ShoppingCartContext from '../ShoppingCartContext'; // Import the context

const Cart = () => {
  const { cartItems } = useContext(ShoppingCartContext); // Use useContext hook to access context

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} x {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
