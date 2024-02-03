import React, { useState} from "react";
import { useShoppingCart } from "./ShoppingCartContext";

const CartItem = ({ item }) => {
    const { removeItemFromCart, updateCartItemQuantity } = useShoppingCart();
    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
        updateCartItemQuantity(item.id, newQuantity)
    };

    const handleRemoveItem = () => {
        removeItemFromCart(item.id);
    };

    return (
        <div>
            <span>{item.name} - Quantity:</span>
            <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            />
            <button onClick={handleRemoveItem}>Remove</button>
        </div>
    );
}

export default CartItem;