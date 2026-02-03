import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartStore';

export default function CartButton() {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => state.cart.items.length);
  
  function handleToggleCart() {
    dispatch(cartActions.toggleVisibility());
  }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};
