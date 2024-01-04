import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity, cartItems } = useContext(ShoppingCartContext);

  //logic behind descreasing quauntity
  const handleQuantityDecrease = () => {
    const updatedQuantity = cartItems.find((i) => i.id === item.id).quantity;

    if (updatedQuantity > 1) {
      updateQuantity(item.id, updatedQuantity - 1);
    }
  };

  return (
    <div>
      <button type="secondary" onClick={() => removeFromCart(item.id)}>Remove ❌ </button>
      <button type="secondary" onClick={handleQuantityDecrease}>Update ➖ </button>
    </div>
  );
};

export default CartItem;