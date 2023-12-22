import { createContext } from 'react'
import { useState } from 'react'


export const ShoppingCartContext =createContext({
cartItems: [], // an array of objects for each item in the cart
addItems: () => {}, // function to add items to the cart array
removeItems: () => {}, // function to remove items from the cart array
emptyCart: () => {}, // function to empty the cart array
updateQuantity: () => {}, // function to update the quantity of an item in the cart array

})

export const ShoppingCartProvider = ({children}) => { // a provider that provides the shopping cart context to the app component and its children.
    const [cartItems, setCartItems] = useState([]) // initialize the cartItems state to an empty array

    const addItems = (item) => { // function to add items to the cart array
        setCartItems([...cartItems, item]) // makes a copy of the cartItems array and adds the new item to it
    }

    const removeItems = (item) => { // function to remove items from the cart array
        setCartItems(cartItems.filter((i) => i.id !== item.id)) // removes the item from the cartItems array
    }

    const emptyCart = () => { // function to empty the cart array
        setCartItems([]) // sets the cartItems array to an empty array
    }   

    const updateQuantity = (item, quantity) => { // function to update the quantity of an item in the cart array
        setCartItems(cartItems.map((i) => i.id === item.id ? {...i, quantity} : i)) // updates the quantity of the item in the cartItems array
    }

    return (
        <ShoppingCartContext.Provider
            value={{
            cartItems,
            addItems,
            removeItems,
            emptyCart,
            updateQuantity
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
    
}

