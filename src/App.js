
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Cart from './context/Cart';
import AddToCartButton from './context/AddToCartButton';

function App() {


   // test data for testing the AddToCartButton
  const testItem = {id: 1, name: 'test item', quantity: 1, price: 9.99}; 
  const testItem2 = {id: 2, name: 'test item 2', quantity: 1, price: 10.99};
  const testItem3 = {id: 3, name: 'test item 3', quantity: 1, price: 11.99};
  const testItem4 = {id: 4, name: 'test item 4', quantity: 1, price: 12.99};
  const testItem5 = {id: 5, name: 'test item 5', quantity: 1, price: 13.99};
  return (
  <ShoppingCartProvider>
    <div className="App">
      <Cart />
      <AddToCartButton item={testItem}  />
      <AddToCartButton item={testItem2}  />
      <AddToCartButton item={testItem3}  />
      <AddToCartButton item={testItem4}  />
      <AddToCartButton item={testItem5}  />
 
     
    </div>
  </ShoppingCartProvider>
    
  );
}

export default App;
