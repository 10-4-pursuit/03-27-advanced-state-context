import React, { useState } from 'react';
import ShoppingCartContext from '../ShoppingCartContext';

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      updateItemQuantity(item.id, existingItem.quantity + item.quantity);
    } else {
      if (item.quantity > 0) {
        const newItem = { ...item };
        setCartItems([...cartItems, newItem]);
      } else {
        console.error('Quantity should be greater than 0.');
      }
    }
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
