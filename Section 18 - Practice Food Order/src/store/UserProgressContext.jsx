import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '', //cart and checkout
  showCart: () => { },
  hideCart: () => { },
  showCheckout: () => { },
  hideCheckout: () => { },
});

export function UserProgressContextProvicer({ children }) {
  const [userProgress, setUserProgress] = useState('');
  console.log('User Progress:', userProgress);


  function showCart() {
    setUserProgress('cart');
  }
  function hideCart() {
    setUserProgress('');
  }

  function showCheckout() {
    setUserProgress('checkout');
  }
  function hideCheckout() {
    setUserProgress('');
  }

  const contextValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  // const contextValue = useMemo(() => ({
  //   progress: userProgress,
  //   showCart,
  //   hideCart,
  //   showCheckout,
  //   hideCheckout,
  // }), [userProgress]);
  return <UserProgressContext value={contextValue}>{children}</UserProgressContext>;
}

export default UserProgressContext;
