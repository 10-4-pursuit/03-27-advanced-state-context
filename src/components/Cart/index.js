import React from "react";
import ShoppingCartContext from "../ShoppingCartContext";
import CartItem from "../CartItem";

function Cart() {
    const { cartItems } = React.useContext(ShoppingCartContext);
    console.log(cartItems);
    return (
        <div>
            {cartItems.map(item => (
                <CartItem item={item}>
                    
                </CartItem>
            ))}
        </div>
    )
}

export default Cart