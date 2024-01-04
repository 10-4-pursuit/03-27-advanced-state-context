import React, { useState , useContext} from 'react';
import { ShoppingCartProvider } from './ShoppingCartContext';
import Cart from './Cart';
import AddToCartButton from './AddToCartButton';
import CartItem from './CartItem';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MenuList, MenuListItem, Separator, styleReset, Button } from 'react95';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import original from 'react95/dist/themes/original';

//sets the style of all the website 
const GlobalStyles = createGlobalStyle`
${styleReset}
@font-face {
  font-family: 'ms_sans_serif';
  src: url('${ms_sans_serif}') format('woff2');
  font-weight: 400;
  font-style: normal
}
@font-face {
  font-family: 'ms_sans_serif';
  src: url('${ms_sans_serif_bold}') format('woff2');
  font-weight: bold;
  font-style: normal
}
body {
  font-family: 'ms_sans_serif';
}
`;   

const App = () => {
//stores vacation location data
  const vacationSpot1 = {id: 1, name: 'Glacier National Park', quantity: 1}; 
  const vacationSpot2 = {id: 2, name: 'Rome', quantity: 1};
  const vacationSpot3 = {id: 3, name: 'Bali', quantity: 1};
 
  return (
    <React.Fragment>
    <GlobalStyles />
    <ThemeProvider theme={original}>
    <ShoppingCartProvider>
      <Cart />
      <MenuList>
      <MenuListItem>
         <AddToCartButton item={vacationSpot1} text="Glacier National Park"  /> 
      <CartItem item={{ id: 1}} />
      </MenuListItem>
      <MenuListItem>
      <AddToCartButton item={vacationSpot2} text="Rome"  />
      <CartItem item={{ id: 2}} />
      </MenuListItem>
      <MenuListItem>
      <AddToCartButton item={vacationSpot3} text="Bali"  />
      <CartItem item={{ id: 3}} />
      </MenuListItem>
      </MenuList>
    </ShoppingCartProvider>
    </ThemeProvider>
    </React.Fragment>
  );
};



export default App;
