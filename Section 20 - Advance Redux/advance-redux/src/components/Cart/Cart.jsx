import { useSelector } from 'react-redux';

import classes from './Cart.module.css';
import CartItem from './CartItem';
import Card from '../UI/Card';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }} /> */}
        {cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id} />)}
      </ul>
    </Card>
  );
};
