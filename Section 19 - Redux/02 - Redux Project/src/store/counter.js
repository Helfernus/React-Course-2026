import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, isButtonHidden: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.isButtonHidden = !state.isButtonHidden;
    }
  }
});

function counterReducer(state = initialCounterState, action) {
  if (action.type === 'increment') {
    return { ...state, counter: state.counter + 1 };
  }

  if (action.type === 'increase') {
    return { ...state, counter: state.counter + action.amount };
  }

  if (action.type === 'decrement') {
    return { ...state, counter: state.counter - 1 };
  }

  if (action.type === 'toggle_buttons') {
    return { ...state, isButtonHidden: !state.isButtonHidden }
  }

  return state;
}

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
