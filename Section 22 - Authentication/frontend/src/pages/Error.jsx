import { useRouteError } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';

export default function Error() {
  let title = 'An Error Occurred!';
  let message = 'Something went Wrong!';

  const error = useRouteError();
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find resource or page!';
  }

  return <>
    {/* <MainNavigation /> */}
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  </>;
}
