import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { handleEventAction } from './components/EventForm';
import EventsLayout from './components/EventsLayout';
import RootLayout from './components/RootLayout';
import EditEventPage from './pages/EditEventPage';
import Error from './pages/Error';
import EventDetailPage, { action as deleteEventAction, loader as eventDetailLoader } from './pages/EventDetailPage';
// import EventsPage from './pages/EventsPage';
import EventsPage, { eventsLoader } from './pages/Events';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import NewsletterPage, { newsLetterAction } from './pages/Newsletter';

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
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
              { path: 'edit', element: <EditEventPage />, action: handleEventAction },
            ]
          },
          { path: 'new', element: <NewEventPage />, action: handleEventAction },
        ],
      },
      {path: '/newsletter', element: <NewsletterPage />, action: newsLetterAction},
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
