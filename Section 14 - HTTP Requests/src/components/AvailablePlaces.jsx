import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        }); //Takes some time

      } catch (error) {
        setError({ message: error.message || 'Could not fetch places, please try again later!' });
        setIsFetching(false);
      }
    }
    fetchPlaces();
    // fetch('http://localhost:3000/places').then((response) => { //Maybe an older approach but allowed in React
    //   return response.json(); //Returns another Promise
    // }).then((responseData) => {
    //   setAvailablePlaces(responseData.places);
    // });
  }, []);


  // const response = await fetch('http://localhost:3000/places'); Not allowed in React

  if (error) {
    return <ErrorPage title="An Error Occurred!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching places...'
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
