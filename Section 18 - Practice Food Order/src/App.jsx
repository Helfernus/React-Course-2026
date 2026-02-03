import Cart from './components/Cart';
import './components/CartItem';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Meals from './components/Meals';
// import Success from './components/Success';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvicer } from './store/UserProgressContext';

function App() {
  return (
    <UserProgressContextProvicer>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
        {/* <Success /> */}
      </CartContextProvider>
    </UserProgressContextProvicer>
  );
}

export default App;
