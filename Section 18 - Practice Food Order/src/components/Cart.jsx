import { useContext } from 'react';

import CartItem from './CartItem';
import Button from './UI/Button';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../util/formatting';

export default function Cart() {
  const { items } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);
  const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  function handleClose() {
    hideCart();
  }

  function handleCheckout() {
    showCheckout();
  }

  return (
    <Modal title='Your Cart' open={progress === 'cart'} onClose={progress === 'cart' ? handleClose : null} className='cart'>
      <ul>
        {items.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />
        )}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
      <div className='modal-actions'>
        <Button textOnly onClick={handleClose}>Close</Button>
        {items.length > 0 && <Button onClick={handleCheckout} type="button">Go to Checkout</Button>}
      </div>
    </Modal>
  );
}
