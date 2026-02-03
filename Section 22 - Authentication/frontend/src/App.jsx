import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { handleEventAction } from './components/EventForm';
import EventsLayout from './components/EventsLayout';
import RootLayout from './components/RootLayout';
import AuthenticationPage, { authAction } from './pages/Authentication';
import EditEventPage from './pages/EditEventPage';
import Error from './pages/Error';
import EventDetailPage, { action as deleteEventAction, loader as eventDetailLoader } from './pages/EventDetailPage';
import EventsPage, { eventsLoader } from './pages/Events';
import HomePage from './pages/HomePage';
import logoutAction from './pages/Logout';
import NewEventPage from './pages/NewEventPage';
import NewsletterPage, { newsLetterAction } from './pages/Newsletter';
import { checkAuthLoader, tokenLoader } from './util/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/auth', element: <AuthenticationPage />, action: authAction },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true, element: <EventsPage />, loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: 'edit', element: <EditEventPage />, action: handleEventAction, loader: checkAuthLoader },
            ]
          },
          { path: 'new', element: <NewEventPage />, action: handleEventAction, loader: checkAuthLoader },
        ],
      },
      { path: '/newsletter', element: <NewsletterPage />, action: newsLetterAction },
      { path: '/logout', action: logoutAction }
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
