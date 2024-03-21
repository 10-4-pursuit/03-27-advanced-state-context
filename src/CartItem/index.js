import React, { useContext } from 'react';
import AddToCartButton from '../AddToCartButton';
import ShoppingCartContext from '../ShoppingCartContext';

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useContext(ShoppingCartContext);

  const handleRemove = () => {
    removeItemFromCart(item.id);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>
        Quantity: {item.quantity}
      </p>
      <AddToCartButton item={item} quantity={1} />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
