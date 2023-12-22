import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

 const AddToCartButton = ({ item }) => {
  const { addItems } = useContext(ShoppingCartContext); // get the addItems function from the ShoppingCartContext

  return <button onClick={() => addItems(item)}>Add to cart</button>;
};

export default AddToCartButton;
