import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  const id = useParams().id;
  const navigate = useNavigate();

  const { data, isError, error, isLoading, isPending } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate, isPending: isMutationPending, isError: isMutationError, error: mutationError, isLoading: isMutationLoading } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events']
      });
      navigate('/events');
    }
  });

  function handleEventDelete() {
    mutate({ id });
  }

  let content = 'Loading Event Details...';
  function EventDetailsInfoWrapper({ children }) {
    return (
      <div id='event-details-content' className='center'>
        {children || <LoadingIndicator />}
      </div>
    );
  };

  if (isLoading) {
    content = <EventDetailsInfoWrapper />;
  }

  if (isPending) {
    content = <EventDetailsInfoWrapper />;
  }

  if (isError) {
    content = <EventDetailsInfoWrapper>
      <ErrorBlock title='Error Occurred while Fetching Event!' message={error.info?.message || 'Failed to fetch event data'} />
    </EventDetailsInfoWrapper>
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleEventDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={`${data.title} Image`} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
