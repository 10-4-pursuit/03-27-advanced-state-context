import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

const AddToCartButton = () => {
    // Access shopping cart context and set initial state for new item
    const { cart, updateCart } = useContext(ShoppingCartContext);
    const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        quantity: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: e.target.value })
    }

    // Handle form submission to add item to the cart
    const handleAddItem = (e) => {
        e.preventDefault();

        // Update cart with the new item
        updateCart([...cart, newItem]);

        // Reset input fields
        setNewItem({
            name: "",
            description: "",
            quantity: ""
        });
    }

    return (
        <form onSubmit={handleAddItem}>
            {/* Input fields for new item */}
            <label for="name">
                <span>Name: </span>
                <input type="text" name="name" value={newItem.name} onChange={handleChange} />
            </label>
            <br/>

            <label for="description">
                <span>Description: </span>
                <input type="text" name="description" value={newItem.description} onChange={handleChange} />
            </label>
            <br/>

            <label for="quantity">
                <span>Quantity: </span>
                <input type="text" name="quantity" value={newItem.quantity} onChange={handleChange} />
            </label>
            <br/>

            {/* Button to add item to the cart */}
            <button type="submit">Add To Cart</button>
        </form>
    )
}

export default AddToCartButton;