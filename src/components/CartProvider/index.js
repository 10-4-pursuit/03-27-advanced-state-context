import React, { useState } from "react";
import CartContext from "../../contexts/Cart";

export default ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  const updateQuantity = (item, quantity) => {
    const newCart = [...cart];
    const index = newCart.findIndex((i) => i.id === item.id);

    if(quantity <= 0) {
      return removeFromCart(item);
    } 

    newCart[index].quantity = quantity;
    setCart(newCart);
  }

  console.log(children);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}