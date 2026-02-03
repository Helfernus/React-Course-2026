import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { cartActions } from '../../store/cartStore';

export default function CartItem(props) {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  function handleIncrementItem() {
    dispatch(cartActions.addItemToCart({ id, title, price, quantity, total }));
  }
  function handleDecrementItem() {
    dispatch(cartActions.removeItemsFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrementItem}>-</button>
          <button onClick={handleIncrementItem}>+</button>
        </div>
      </div>
    </li>
  );
};
