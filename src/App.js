import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cart from './Cart';
import AddToCartButton from './AddToCartButton';
import CartItem from './CartItem';
import ShoppingCartContext from './ShoppingCartContext';
import { ShoppingCartProvider } from './ShoppingCartContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ShoppingCartProvider>
          <div>
            <h1>A Typical Shopping React Application</h1>
            <Cart />
            <AddToCartButton item={{ id: 1, name: "Item 1" }} />
            <AddToCartButton item={{ id: 2, name: "Item 2" }} />
            <AddToCartButton item={{ id: 3, name: "Item 3" }} />
            <AddToCartButton item={{ id: 4, name: "Item 4" }} />
            <CartItem item={{ id: 1, name: "Item 1", quantity: 1 }} />
            <CartItem item={{ id: 2, name: "Item 2", quantity: 1 }} />
            <CartItem item={{ id: 3, name: "Item 3", quantity: 1 }} />
            <CartItem item={{ id: 4, name: "Item 4", quantity: 1 }} />
          </div>
        </ShoppingCartProvider>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
