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
      <ul>
        {shoppingCart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;