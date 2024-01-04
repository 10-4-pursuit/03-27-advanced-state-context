import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext ({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {}
});

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
      const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        setCartItems((prevItems) =>
          prevItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        );
      } else {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
      }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
      };

    const updateQuantity = (itemId, newQuantity) => {
        setCartItems((prevItems) =>
          prevItems.map((i) =>
            i.id === itemId ? { ...i, quantity: newQuantity } : i
          )
        );
      };

      
      return (
        <ShoppingCartContext.Provider
          value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
        >
          {children}
        </ShoppingCartContext.Provider>
      );
};