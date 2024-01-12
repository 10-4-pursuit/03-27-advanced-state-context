import React from "react";
import ShoppingCartContext from "../ShoppingCartContext";

function CartItem ({ item }) {
    const { updateItemQuantity, removeItemFromCart } = React.useContext(ShoppingCartContext);

    return (
        <div>
            <p>{item.name}</p> 
            <p>ID: {item.id}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
        </div>
    );
};

export default CartItem;