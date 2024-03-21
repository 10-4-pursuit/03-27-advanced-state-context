import React, { useContext } from 'react';
import ShoppingCartContext from '../ShoppingCartContext';

const AddToCartButton = ({ item, quantity }) => {
  const { addItemToCart } = useContext(ShoppingCartContext);

  const handleClick = () => {
    addItemToCart({ ...item, quantity });
  };

  return <button onClick={handleClick}>Add to Cart</button>;
};

export default AddToCartButton;
