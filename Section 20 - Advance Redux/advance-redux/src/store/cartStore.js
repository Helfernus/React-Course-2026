import { createSlice } from '@reduxjs/toolkit';

const initialState = { isVisible: false, items: [], changed: false };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
    replaceCart(state, actions) {
      state.items = actions.payload.items;
    },
    addItemToCart(state, action) {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      state.changed = true;
      if (existingIndex > -1) {
        state.items[existingIndex].quantity = state.items[existingIndex].quantity + 1;
        state.items[existingIndex].total = state.items[existingIndex].price * state.items[existingIndex].quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1, total: action.payload.price });
      }
    },
    removeItemsFromCart(state, action) {
      const cartItemToUpdateIndex = state.items.findIndex(item => item.id === action.payload);
      state.changed = true;
      if (state.items[cartItemToUpdateIndex].quantity > 1) {
        state.items[cartItemToUpdateIndex].quantity = state.items[cartItemToUpdateIndex].quantity - 1;
        state.items[cartItemToUpdateIndex].total = state.items[cartItemToUpdateIndex].price * state.items[cartItemToUpdateIndex].quantity;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
