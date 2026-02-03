import { Suspense } from 'react';
import { Await, redirect, useRouteLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

export default function EventDetailPage() {
  const { myEvent, myEvents } = useRouteLoaderData('event-detail');

  // const eventId = useParams();
  // const retrievedEventId = eventId.eventId;
  // const retrievedEvent = DUMMY_EVENTS.find(event => event.id === retrievedEventId);
  return <>
    <Suspense fallback={<p style={{ textAlignment: 'center' }}>Loading Event...</p>}>
      <Await resolve={myEvent}>
        {loadedEvent => <EventItem event={loadedEvent} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{ textAlignment: 'center' }}>Events Loading...</p>}>
      <Await resolve={myEvents}>
        {loadedEvents => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  </>;
}
async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch details for selected event.' }), {
      status: 500
    });
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw { message: 'Could not fetch events.' };

    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
    //Alternative to ^ is v
    // return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ _request, params }) { //Loader gets a request and a params from React Router
  const id = params.eventId;
  return {
    myEvent: await loadEvent(id),
    myEvents: loadEvents(),
  };
}

export async function action({ params, request }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete the event.' }), {
      status: 500
    });
  } else {
    return redirect('/events');
  }
}
