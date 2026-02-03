import { Link } from 'react-router-dom';

import { DUMMY_EVENTS } from '../data/Events';

export default function EventsPage() {
  return <>
    <h1>Events Page</h1>
    <section>
      <ul>
        {DUMMY_EVENTS.map(event => <li key={event.id}><Link to={event.id}>{event.title}</Link></li>)}
      </ul>
    </section>
  </>;
}