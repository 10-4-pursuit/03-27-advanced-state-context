import './App.css';
import { ShoppingCartProvider } from './ShoppingCartContext';
import AddToCartButton from './AddToCartButton';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* Wrap components with ShoppingCartProvider */}
          <ShoppingCartProvider>
            <Cart />
            <AddToCartButton />
          </ShoppingCartProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
