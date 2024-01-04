import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';


const AddToCartButton = ({ item, text }) => {
  const { addToCart} = useContext(ShoppingCartContext);

  return (
     <button  onClick={() => addToCart(item)}>Select{text}</button>
  );
};

export default AddToCartButton