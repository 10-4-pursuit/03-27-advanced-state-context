import logo from './logo.svg';
import React from 'react';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Cart from './components/Cart';
import AddToCartButton from './components/AddToCartButton';
import CartItem from './components/CartItem';

const App = () => {
  return (
    <ShoppingCartProvider>
      <div>
        <Cart />
        <AddToCartButton item={{ id: 1, name: 'Product 1', quantity: 1 }} />
        <CartItem item={{ id: 1, name: 'Product 1', quantity: 1 }} />
      </div>
    </ShoppingCartProvider>
  );
};

export default App;
