import { useContext } from 'react';

import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';

export default function CartItem({ item }) {
  const { addItem, removeItem } = useContext(CartContext);

  return <li className='cart-item' >
    <p>{item.name} - {item.quantity} x {currencyFormatter.format(item.price)}</p>
    <div className='cart-item-actions'>
      <Button rounded onClick={() => removeItem(item.id)}>-</Button>
      <span>{item.quantity}</span>
      <Button rounded onClick={() => addItem(item)}>+</Button>
    </div>
  </li>;
}
