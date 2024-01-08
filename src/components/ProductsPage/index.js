import { useContext, useState } from "react";
import CartContext from "../../contexts/Cart";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Coffee",
      price: '5.00',
    },
    {
      id: 2,
      name: "Cigars",
      price: '20.00',
    },
    {
      id: 3,
      name: "Wine",
      price: '10.00',
    },
  ]);

  const { cart, addToCart, removeFromCart, updateQuantity } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="products-page">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        const hasItemInCart = !!cartItem;

        let productControls = null;

        if(hasItemInCart) {
          productControls = (
            <div>
              <button className="product-sub" onClick={() => updateQuantity(cartItem, cartItem.quantity - 1)}>
                {
                  cartItem.quantity === 1 ? (
                    <i className="fa-solid fa-trash"></i>
                  ) : (
                    <i className="fa-solid fa-minus"></i>
                  )
                }
              </button>
              <span className="product-quantity">{cartItem.quantity}</span>
              <button className="product-add" onClick={() => updateQuantity(cartItem, cartItem.quantity + 1)}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          )
        }
        else {
          productControls = (
            <button className="product-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
          )
        }
        return (
          <div key={product.id} className="product-entry">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {
              productControls
            }
          </div>
        )
      })}
    </div>
  );
}

export default ProductsPage;