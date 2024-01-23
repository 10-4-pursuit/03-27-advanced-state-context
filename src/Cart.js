import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import CartItem from "./CartItem";

const Cart = () => {
    // Access shopping cart context
    const { cart, updateCart } = useContext(ShoppingCartContext);

    // Event handlers for updating cart
    const handleIncrease = (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        updateCart(updatedCart);
    };

    const handleDecrease = (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.name === item.name && cartItem.quantity > 0
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
        updateCart(updatedCart);
    };

    const handleDelete = (deletedItem) => {
        const updatedCart = cart.filter((item) => item.name !== deletedItem.name);
        updateCart(updatedCart);
    };

    console.log(cart)
    return (
        <div>
            <h1>Cart</h1>
            {/* Render CartItem for each item in the cart */}
            {cart.map((item, index) => (
            <CartItem 
                key={index} 
                item={item} 
                onDelete={handleDelete} onIncrease={handleIncrease}
                onDecrease={handleDecrease}/>
            ))}
        </div>
    );
};

export default Cart;