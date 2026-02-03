import { useContext } from 'react';

import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';

export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);

  const imageSource = `http://localhost:3000/${meal.image}`;

  return (
    <li className='meal-item'>
      <article>
        <img src={imageSource} alt={`${meal.name} Pic`} />
        <div>
          <h3>{meal.name}</h3>
          <span className='meal-item-price'>{currencyFormatter.format(meal.price)}</span>
          <p className='meal-item-description'>{meal.description}</p>
        </div>
        <div className='meal-item-actions'>
          <Button onClick={() => addItem(meal)}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
}
