import React from "react";
import ShoppingCartContext from "../ShoppingCartContext";

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = React.useState([
        {
            name: "Manga",
            id: "aN1m3!",
            quantity: 10,
        }
    ]);

    const addItemToCart = (newItem) => {
        setCartItems(previousItems => {
            const existingItem = previousItems.find(item => item.id === newItem.id);
            if (existingItem) {
                return previousItems.map(item =>
                    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item 
                );
            } else {
                return [...previousItems, { ...newItem, quantity: 1 }];
            }
        });
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(previousItems => {
            return previousItems.filter(item => item.id !== itemId);
        });
    };

    const updateItemQuantity = (itemId, quantity) => {
        setCartItems(previousItems => {
            return previousItems.map(item =>
                item.id === itemId ? { ...item, quantity: quantity } : item
            );
        });
    };

    return (
        <ShoppingCartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};