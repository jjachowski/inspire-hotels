import { Trip, TripsResponse } from './tripTypes';
import {} from '../public/fakeData.json';
export const fetchTrips = (): Promise<TripsResponse> => {
  const trips = fetch('fakeData.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }).then((x) => x.json());
  return trips;
};
