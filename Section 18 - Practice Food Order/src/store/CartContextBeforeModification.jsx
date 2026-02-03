// import { createContext, useReducer } from 'react';

// const CartContext = createContext({
//   items: [],
//   addItem: (meal) => { },
//   removeItem: (id) => { },
// });

// function cartReducer(state, action) {

//   if (action.type === 'ADD_ITEM') {
//     const itemToUpdate = state.find(item => item.id === action.payload.id);

//     if (itemToUpdate) {
//       const itemIndex = state.indexOf(itemToUpdate);

//       const updatedCart = [...state];
//       updatedCart[itemIndex] = { ...itemToUpdate, quantity: itemToUpdate.quantity + 1 };

//       return updatedCart;
//     }
//     else {
//       return [...state, {
//         id: action.payload.id,
//         name: action.payload.name,
//         price: +action.payload.price,
//         quantity: 1,
//       }];
//     }
//   }

//   if (action.type === 'REMOVE_ITEM') {
//     const itemToUpdate = state.find(item => item.id === action.payload);

//     if (itemToUpdate.quantity === 0) { //Disable Something
//       return state;
//     }
//     const itemIndex = state.indexOf(itemToUpdate);

//     const updatedCart = [...state];
//     updatedCart[itemIndex] = { ...itemToUpdate, quantity: itemToUpdate.quantity - 1 };

//     return updatedCart;
//   }
//   return state;
// }

// export function CartContextProvider({ children }) {
//   const [cartState, cartDispatch] = useReducer(cartReducer, []);

//   function addItem(meal) {
//     cartDispatch({
//       type: 'ADD_ITEM',
//       payload: {
//         id: meal.id,
//         name: meal.name,
//         price: meal.price,
//       }
//     });
//   }

//   function removeItem(id) {
//     cartDispatch({
//       type: 'REMOVE_ITEM',
//       payload: id,
//     });
//   }

//   const contextValue = {
//     items: cartState,
//     addItem,
//     removeItem,
//   };
//   return <CartContext value={contextValue}>{children}</CartContext>;
// }

// export default CartContext;
