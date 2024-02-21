import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    updateQuantity: () => {},
});

const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);

    };
    const removeItem = (id) => {
        setCartItems(cartItems.filter((i) => i.id !== id));

    };
    const updateQuantity = (id, quantity) => {        
        setCartItems(cartItems.map((i) => i.id === id ? { ...i, quantity } : i));

    };

     
    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                addItem,
                removeItem,
                updateQuantity,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

const useShoppingCart = () =>  useContext(ShoppingCartContext)
    

export  {ShoppingCartContext, ShoppingCartProvider, useShoppingCart};