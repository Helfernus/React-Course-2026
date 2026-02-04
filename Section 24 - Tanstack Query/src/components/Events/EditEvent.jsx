import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const id = useParams().id;
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();

  //Do not remove useQuery even if using Loader like tabbing out and other React Query caching mechanism
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
    staleTime: 10000,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   // onSuccess: () => {
  //   // queryClient.invalidateQueries({ queryKey: ['events'] });
  //   // navigate('../');
  //   // }
  //   onMutate: async (updatedData) => { // Optimistic Updating
  //     const newEvent = updatedData.event;

  //     await queryClient.cancelQueries({ queryKey: ['events', id] }); // Making sure any outgoing queries for this key would be cancelled
  //     const preChangeEvent = queryClient.getQueryData(['events', id]);

  //     queryClient.setQueryData(['events', id], newEvent);

  //     return { preChangeEvent };
  //   },
  //   onError: (data, error, context) => {
  //     queryClient.setQueryData(['events', id], context.preChangeEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events', id]);
  //   }
  // });

  function handleSubmit(formData) {
    // mutate({ id, event: formData });
    // navigate('../');
    submit(formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  // Not needed with React Router
  // if (isPending) {
  //   content = <div className='center'>
  //     <LoadingIndicator />
  //   </div>
  // }

  if (isError) {
    content = <>
      <ErrorBlock title='Failed to Load Event' message={error.info?.message || 'Failed to load event. Please check your inputs and try again later.'} />
      <div className='form-actions'>
        <Link to='../' className='button'>Okay</Link>
      </div>
    </>
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? <p>Sending data...</p> : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>{content}</Modal>
  );
}

export function editEventLoader({ params }) {
  const id = params.id;

  return queryClient.fetchQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });
}

export async function editEventAction({ request, params }) {
  const id = params.id;

  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id, event: updatedEventData });
  await queryClient.invalidateQueries(['events']);
  return redirect('../');
}
