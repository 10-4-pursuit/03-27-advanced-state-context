import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const CartItem = ({ item }) => {
  const { removeItems, updateQuantity } = useContext(ShoppingCartContext); // get the removeItems and updateQuantity functions from the ShoppingCartContext

  return (
    <div>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <input 
        type="number" 
        value={item.quantity} 
        onChange={(e) => updateQuantity(item, parseInt(e.target.value, 10))} 
      />
      <button onClick={() => removeItems(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
