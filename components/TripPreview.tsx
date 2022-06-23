import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Trip } from '../api/tripTypes';
import { StarRating } from './StarRating';

interface TripPreviewProps {
  trip: Trip;
}

export const TripPreview: React.FC<TripPreviewProps> = ({ trip }) => {
  return (
    <Flex
      direction='column'
      w={['100%', '100%', '20rem']}
      bg='blackAlpha.300'
      rounded='2xl'
      overflow='hidden'
      shadow='lg'
    >
      <Image
        key={trip.id}
        src={trip.image}
        alt={trip.alt}
        layout='responsive'
        objectFit='fill'
        width={trip.width}
        height={trip.height}
      />
      <Flex direction='column' p={4}>
        <Heading size='sm'>{trip.description}</Heading>
        <Heading size='lg'>{trip.name}</Heading>
        <Flex direction='row' alignItems='center' mt={4}>
          <StarRating isStatic initialValue={trip.rating} />
          <Heading size='sm' ml={4}>
            {trip.rating}
          </Heading>
        </Flex>

        <Flex direction='row' mt={4}>
          <Heading size='sm'>{trip.discountedPrice}</Heading>
          <Heading size='sm' ml={4}>
            <s>{trip.originalPrice}</s>
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};
