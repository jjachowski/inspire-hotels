export type Trip = {
  id: number;
  name: string;
  description: string;
  rating: number;
  originalPrice: string;
  discountedPrice: string;
  alt: string;
  image: string;
  width: number;
  height: number;
};

export type TripsResponse = {
  trips: Trip[];
};
