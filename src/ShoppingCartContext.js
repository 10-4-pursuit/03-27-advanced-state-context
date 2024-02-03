import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext({
    shoppingCart: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    updateCartItemQuantity: () => {},
})

const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);

    const addItemToCart = (item) => {
        setShoppingCart([...shoppingCart, item]);
    };

    const removeItemFromCart = (id) => {
        setShoppingCart(shoppingCart.filter((item) => item.id !== id));
    };

    const updateCartItemQuantity = (id, quantity) => {
        setShoppingCart(shoppingCart.map((item) => item.id === id ? { ...item, quantity } : item)
        );
    }
    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, addItemToCart, removeItemFromCart, updateCartItemQuantity }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

const useShoppingCart = () => useContext(ShoppingCartContext);

export { ShoppingCartProvider, useShoppingCart, ShoppingCartContext };
