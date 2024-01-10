import { useContext } from "react";
import CartContext from "../../contexts/Cart";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutPage;
