import React, { useContext, useState } from "react";
import { ShoppingCartContext, ShoppingCartProvider, useShoppingCart } from "./ShoppingCartContext";

const AddToCartButton = ({ item }) => {
    const { addItemToCart } = useContext(ShoppingCartContext);

    const { removeItemFromCart, updateCartItemQuantity } = useShoppingCart();

    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
        updateCartItemQuantity(item.id, newQuantity)
    };

    const handleAddToCart = () => {
        addItemToCart({ ...item, quantity });
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
            <button onClick={handleAddToCart}>Add to Cart</button>
            <br />
        </div>
    );
}

export default AddToCartButton;