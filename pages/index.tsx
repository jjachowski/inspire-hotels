import type { NextPage } from 'next';
import { Flex, Grid, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { fetchTrips } from '../api/tripApi';
import { Trip } from '../api/tripTypes';
import { Layout } from '../components/Layout';
import { TripPreview } from '../components/TripPreview';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Home: NextPage = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  useEffect(() => {
    const getTrips = async () => {
      const tripsResponse = await fetchTrips();
      if (tripsResponse.trips.length > 0) {
        setTrips(tripsResponse.trips);
      }
    };
    getTrips();
  }, []);
  return (
    <Layout>
      <Heading size='2xl' mt={8}>
        Recently viewed trips <DarkModeSwitch />
      </Heading>
      <Wrap alignItems='center'>
        {trips.map((trip) => (
          <WrapItem key={trip.id} w={['100%', '100%', '30%']} p={4}>
            <TripPreview trip={trip} />
          </WrapItem>
        ))}
      </Wrap>
    </Layout>
  );
};

export default Home;
