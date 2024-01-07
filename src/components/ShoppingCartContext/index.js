import React from "react";

const ShoppingCartContext = React.createContext({
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    updateItemQuantity: () => {}
});

export default ShoppingCartContext;