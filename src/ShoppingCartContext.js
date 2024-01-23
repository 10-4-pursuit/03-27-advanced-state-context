import React, { createContext, useState } from "react";

// Create shopping cart context
const ShoppingCartContext = createContext();

// Create shopping cart provider component
const ShoppingCartProvider = ({ children }) => {
    // Set initial state for the cart
    const [cart, setCart] = useState([{
        name: "blah",
        description: "blah",
        quantity: 1
    }]);
    
    // Function to update the cart
    const updateCart = (newItem) => {
        setCart(newItem);
      };

    // Provide context value to children components
    return (
        <ShoppingCartContext.Provider value={{ cart, updateCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
  };

export { ShoppingCartProvider, ShoppingCartContext };