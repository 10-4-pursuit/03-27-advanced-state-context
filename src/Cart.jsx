import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const Cart = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Your Vacation Spots</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
           NAME: {item.name}  QT: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;