import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Home/Navbar';
import ProductContainer from './components/Home/ProductContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import { Provider, useSelector } from 'react-redux';
import store from './Redux/store';

function App() {
  const [showCart, setShowCart] = useState(false);
  
  const handleShowCart = () => {
    console.log("click")
      setShowCart(!showCart);
  }
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar handleShowCart={handleShowCart}></Navbar>
    </div>
      {showCart ? <Cart/> : <ProductContainer></ProductContainer>}
    </Provider>
  );
}

export default App;
