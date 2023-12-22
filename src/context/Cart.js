import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from 'react'
import CartItem from "../context/CartItem"

 const Cart = () => {
    const {cartItems} = useContext(ShoppingCartContext) // get the cartItems from the ShoppingCartContext

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.map(item => <CartItem key={item.id} item={item} />)}
        </div>
    )
    
}

export default Cart