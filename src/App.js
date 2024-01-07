import './App.css';
import { ShoppingCartProvider } from './components/ShoppingCartProvider';
import Cart from './components/Cart';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <header className="App-header">
          <Cart />
        </header>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
