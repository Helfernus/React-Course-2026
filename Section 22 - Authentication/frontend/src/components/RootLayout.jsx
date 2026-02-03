import { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from './MainNavigation';
import { getTokenDuration } from '../util/Auth';

export default function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'POST' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log('Token Duration: ', tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'POST' });
    }, tokenDuration);
  }, [token, submit]);

  // navigation.state === '';

  return <>
    <MainNavigation />
    <main>
      {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
      <Outlet />
    </main>
  </>;
}
