import { useContext } from 'react';

import FoodAppLogo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const quantity = items.reduce((totalNumberofItems, item) => totalNumberofItems + item.quantity, 0);

  function openCart() {
    showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={FoodAppLogo} alt="Fine dining with a plate, napkins and wine glasses." />
        <h1>Reactfood</h1>
      </div>
      <nav>
        <Button textOnly onClick={openCart}>Cart {items.length > 0 && `(${quantity})`}</Button>
      </nav>
    </header>
  );
}
