import { StarIcon } from '@chakra-ui/icons';
import { HStack, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

interface StarRatingProps {
  numberOfStars?: number;
  isStatic?: boolean;
  onChange?: (value: number) => void;
  initialValue?: number;
}

const isYellow = (index: number, rating: number, hoveredOn: number) => {
  if (rating >= index) return 'yellow';
  if (hoveredOn >= index) return 'yellow';
  return undefined;
};

export const StarRating: React.FC<StarRatingProps> = ({
  numberOfStars = 5,
  onChange,
  isStatic,
  initialValue = 0,
}) => {
  const [rating, setRating] = useState(initialValue ?? 0);
  const [hoveredOn, setHoveredOn] = useState<number>(-1);

  if (isStatic) {
    return (
      <Tooltip label={rating} aria-label='Rating in stars' openDelay={500}>
        <HStack>
          {[...Array(numberOfStars)].map((x, i) => (
            <StarIcon
              key={i}
              h={6}
              w={6}
              color={i < Math.round(rating) ? 'yellow' : undefined}
            />
          ))}
        </HStack>
      </Tooltip>
    );
  }

  const stars = [...Array(numberOfStars)].map((x, i) => (
    <StarIcon
      key={i}
      h={6}
      w={6}
      onMouseEnter={() => {
        setHoveredOn(i);
      }}
      color={isYellow(i, rating, hoveredOn)}
      onClick={() => {
        setRating(i);
        onChange && onChange(i + 1);
      }}
    />
  ));

  return (
    <Tooltip label={rating} aria-label='Rating in stars' openDelay={500}>
      <HStack onMouseLeave={() => setHoveredOn(-1)}>{stars}</HStack>
    </Tooltip>
  );
};
