import React, { useContext } from "react";
import { ShoppingCartContext, ShoppingCartProvider } from "./ShoppingCartContext";

const Cart = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  if (!shoppingCart) {
    return <div>Loading...</div>;
  }


  return (
    <div>
    <h2>Shopping Cart</h2>
    {shoppingCart.map((item) => (
      <p key={item.id}>
        {item.name} - Quantity: {item.quantity}
      </p>
    ))}
  </div>
  );
};

export default Cart;