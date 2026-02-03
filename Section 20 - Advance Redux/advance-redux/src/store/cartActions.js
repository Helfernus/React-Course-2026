import { cartActions } from './cartStore';
import { uiActions } from './uiStore';

const FIREBASE_ENDPOINT = 'https://firsttestredux-default-rtdb.asia-southeast1.firebasedatabase.app/';

export function fetchCartData() {
  return async dispatch => {
    async function fetchData() {
      const response = await fetch(`${FIREBASE_ENDPOINT}/cart.json`);
      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({ items: cartData.items || [] }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      }));
    }
  };
}

export function sendCartData(cartData) {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }));

    async function sendRequest() {
      const response = await fetch(`${FIREBASE_ENDPOINT}/cart.json`, {
        method: 'PUT', //PUT Overrride existing Data, rather than updating through POST
        body: JSON.stringify({items: cartData.items}),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }
    }

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }));
    }
  };
}
