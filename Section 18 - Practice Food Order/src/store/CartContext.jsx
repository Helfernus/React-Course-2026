import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (meal) => { },
  removeItem: (id) => { },
  clearCart: () => { },
});

function cartReducer(state, action) {

  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      updatedItems[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity + 1 };
    } else {
      updatedItems.push({ ...action.payload, quantity: 1 });
    }

    return {
      ...state,
      items: updatedItems
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const itemToUpdateIndex = state.items.findIndex(item => item.id === action.payload);
    const updatedItems = [...state.items];

    if (updatedItems[itemToUpdateIndex].quantity === 1) {
      updatedItems.splice(itemToUpdateIndex, 1);
    } else {
      const existingItem = state.items[itemToUpdateIndex];
      updatedItems[itemToUpdateIndex] = { ...existingItem, quantity: existingItem.quantity - 1 };
    }
    return {
      ...state,
      items: updatedItems
    };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  function addItem(meal) {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: meal,
    });
  }

  function removeItem(id) {
    cartDispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  }

  function clearCart() {
    cartDispatch({ type: 'CLEAR_CART' });
  }

  const cartContext = {
    items: cartState.items,
    addItem,
    removeItem,
    clearCart,
  };
  return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;
