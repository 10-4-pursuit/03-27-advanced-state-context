import React from 'react';
import {ShoppingCartProvider} from './ShoppingCartProvider';
import Cart from './Cart';
import CartItem from './CartItem';



const App = () => {
  const products = [
    { id: 1, name: 'Product 1'}, 
    { id: 2, name: 'Product 2'}
    ]
  return (
    <ShoppingCartProvider>
      <div>
        <h1>My Shopping App</h1>
        <Cart />
        {
          products.map(product => (
            <CartItem item={product} />
          )) 
        }
        
      </div>
    </ShoppingCartProvider>
  );
};

export default App;

