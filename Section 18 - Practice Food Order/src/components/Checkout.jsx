import { useContext, useActionState } from 'react';

import Error from './Error';
import Button from './UI/Button';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';
import { useHttp } from '../hooks/useHttp';

// Config Objects must be created outside to avoid side effects of object re-creation
const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

export default function Checkout() {
  const { items, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);
  const { data, error,
    // isLoading: isSending,
    sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig);

  const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  // async function handleCheckoutSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const customerData = Object.fromEntries(formData.entries());

  //   sendRequest(JSON.stringify({
  //     order: {
  //       items,
  //       customer: customerData
  //     },
  //   }));
  // }

  async function checkoutAction(previousFormState, formData) {
    const customerData = Object.fromEntries(formData.entries());

    await sendRequest(JSON.stringify({
      order: {
        items,
        customer: customerData
      },
    }));
  }

  const [formState, formAction, isSending] = useActionState(checkoutAction, null);

  function handleCheckoutClose() {
    hideCheckout();
  }

  function handleFinish() {
    hideCheckout();
    clearCart();
    clearData();
  }

  let actions = (<>
    <Button textOnly onClick={handleCheckoutClose} type="button">Close</Button>
    <Button type="submit">Submit Order</Button>
  </>);

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return <Modal title="Success" open={progress === 'checkout'} onClose={handleFinish}>
      <span>Your Order is Placed Successfully!</span>
      <p>We will get back to you with more details via email within the next few minutes.</p>
      <div className='modal-actions'>
        <Button onClick={handleFinish}>Okay</Button>
      </div>
    </Modal>;
  }

  return (
    <Modal title='Checkout' open={progress === 'checkout'} onClose={handleCheckoutClose}>
      <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
      <form action={formAction}>
        <Input label='Full Name' name='name' type='text' />
        <Input label='E-mail Address' name='email' type='email' />
        <Input label='Street' name='street' type='text' />
        <div className='control-row'>
          <Input label="Postal Code" name='postal-code' type='text' />
          <Input label="City" name='city' type='text' />
        </div>
        {error && <Error title="Failed to send order!" message={error} />}
        <div className='modal-actions'>{actions}</div>
      </form>
    </Modal>
  );
}
