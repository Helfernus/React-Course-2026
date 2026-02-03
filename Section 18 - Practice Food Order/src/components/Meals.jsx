import Error from './Error';
import MealItem from './MealItem';
import { useHttp } from '../hooks/useHttp';

// Config Objects must be created outside to avoid side effects of object re-creation
const requestConfig = {};

export default function Meals() {
  const { data: meals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className='center'>Loading meals...</p>;
  }

  if (error) {
    return <Error title='Failed to fetch Meals' message={error} />;
  }

  return (
    <ul id="meals">
      {meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
