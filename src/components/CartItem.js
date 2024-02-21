import React, { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const CartItem = ({ item }) => {
  const { removeItem, updateQuantity} = useShoppingCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  return (
    <div>
      <span>{item.name} - Quantity:</span>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleRemoveItem}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;