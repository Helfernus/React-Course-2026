import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const isButtonHidden = useSelector(state => state.counter.isButtonHidden);

  function incrementHandler() {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  }
  function increaseHandler(amount) {
    // dispatch({ type: 'increase', amount });
    dispatch(counterActions.increase(amount));
  }
  function decrementHandler() {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle_buttons' });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {!isButtonHidden && <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseHandler(5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
