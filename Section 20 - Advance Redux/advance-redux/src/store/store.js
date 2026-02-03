import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartStore';
import uiReducer from './uiStore';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  }
});

export default store;
