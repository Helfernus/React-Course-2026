import { useDispatch } from 'react-redux';

import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cartStore';
import Card from '../UI/Card';

export default function ProductItem({ id, title, price, description }) {
  const dispatch = useDispatch();
  const product = { id, title, price };

  function handleAddToCart() {
    dispatch(cartActions.addItemToCart(product));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
