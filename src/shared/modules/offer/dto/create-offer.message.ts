export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  city: {
    invalid: 'city must be Object',
  },
  images: {
    invalidFormat: 'Images must be an array',
  },
  isPremium: {
    invalidFormat: 'Must be a boolean',
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

