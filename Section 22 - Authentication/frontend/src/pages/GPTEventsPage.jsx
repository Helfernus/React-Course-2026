import { Link } from 'react-router-dom';

import { DUMMY_EVENTS } from '../data/Events';
import './EventsPage.css';

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00'); // ensure treated as local date
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}

function formatPrice(p) {
  if (p === 0) return 'Free';
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'INR' }).format(p);
}

export default function EventsPage({ events = DUMMY_EVENTS }) {
  function handleEventsDetailCheckout() {}

  return (
    <>
      <h1>Events Page</h1>
      <section className="events-root" aria-labelledby="events-heading">
        <div className="events-header">
          <h2 id="events-heading">Upcoming Events</h2>
          <p className="events-sub">Hand-picked events near you & online</p>
        </div>

        <div className="events-grid" role="list">
          {events.map(ev => (
            <article key={ev.id} className="event-card" role="listitem" aria-label={ev.title}>
              <div className="event-media">
                <img src={ev.image} alt={`${ev.title} cover`} loading="lazy" />
                {ev.isOnline && <span className="pill online">ONLINE</span>}
              </div>

              <div className="event-body">
                <div className="event-meta">
                  <time dateTime={ev.date} className="event-date">{formatDate(ev.date)}</time>
                  <span className="dot">•</span>
                  <span className="event-time">{ev.time}</span>
                </div>

                <h3 className="event-title">{ev.title}</h3>

                <p className="event-desc">{ev.description}</p>

                <div className="event-footer">
                  <div className="event-left">
                    <span className="location" title={ev.location}>{ev.location}</span>
                    <div className="tags">
                      {ev.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="event-right">
                    <span className="price">{formatPrice(ev.price)}</span>
                    <Link to={ev.id} className="btn-primary" aria-label={`Register for ${ev.title}`}>
                      Check Out
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
