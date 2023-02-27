import './App.css';
import Navbar from './components/Home/Navbar';
import ProductContainer from './components/Home/ProductContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar></Navbar>
      {/* <ProductContainer></ProductContainer>  */}
    </div>
    </Provider>
  );
}

export default App;
