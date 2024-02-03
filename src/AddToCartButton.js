import React, { useContext } from "react";
import { ShoppingCartContext, ShoppingCartProvider } from "./ShoppingCartContext";

const AddToCartButton = ({ item }) => {
    const { addItemToCart } = useContext(ShoppingCartContext);

    const handleAddToCart = () => {
        addItemToCart({ ...item, quantity: 1 });
    };

    return (
        <div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default AddToCartButton;