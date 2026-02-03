import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

export default function EventsPage() {
  const { myEvents } = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return <Suspense fallback={<p style={{ textAlignment: 'center' }}>Loading...</p>}>
    <Await resolve={myEvents}>
      {(loadedEvents) => <EventsList events={loadedEvents} />}
    </Await>;
  </Suspense>;
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

export function eventsLoader() {
  return {
    myEvents: loadEvents(),
  };
}
