export const UpdateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  postDate: {
    invalidFormat: 'postDate must be a valid ISO date',
  },
  city: {
    invalid: 'city must be Object',
  },
  images: {
    invalidFormat: 'Images must be an array',
  },
  isPremium: {
    invalidFormat: 'Must be Boolean',
  },
  isFavorite: {
    invalidFormat: 'Must be Boolean',
  },
  rating: {
    invalidFormat: 'Must be Number',
  },
  type: {
    invalid: 'type must be value from OfferType Enum',
  },
  countRooms: {
    invalidFormat: 'Must be Number',
  },
  maxAdults: {
    invalidFormat: 'Must be Number',
  },
  price: {
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
    invalidFormat: 'Price must be an Number',
  },
  location: {
    invalidFormat: 'location must be Object',
  },
} as const;
