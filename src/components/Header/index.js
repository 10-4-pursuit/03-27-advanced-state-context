import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../contexts/Cart";
import "./styles.css";

const Header = () => {

  const { cart } = useContext(CartContext);

  return (
    <header>
     
      <div className="cart-preview">
        <Link to="/">
          <i className="fa-solid fa-shopping-bag"></i>
        </Link>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        
        {
          cart.length > 0 && (
            <span>{ cart.reduce((acc, val) => acc + val.quantity, 0) }</span>
          )
        }
        
      </div>
      
    </header>
  )
}

export default Header;
