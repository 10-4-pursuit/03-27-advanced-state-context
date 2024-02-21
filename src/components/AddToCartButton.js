import React, { useContext, useState } from 'react';
import { ShoppingCartContext, ShoppingCartProvider } from '../context/ShoppingCartContext';

const AddToCartButton = ({ item }) => {
  const { addItem } = useContext(ShoppingCartContext);
const { updateQuantity } = useContext(ShoppingCartContext);
const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

 
  const handleAddToCart = () => {
    addItem({ ...item, quantity });
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
      <button onClick= {handleAddToCart}>Add to Cart</button>
    </div>

  );
};

export default AddToCartButton;