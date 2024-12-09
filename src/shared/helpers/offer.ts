import {Amenity, City, Offer, OfferType, UserType} from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    createdDate,
    city,
    previewImage,
    photos,
    premium,
    favorite,
    rating,
    type,
    roomCount,
    guestCount,
    price,
    amenities,
    name,
    email,
    avatar,
    userType,
    coordinates
  ] = offerData.replace('\n', '').split('\t');

  return {
    title,
    description,
    postDate: new Date(createdDate),
    city: city as City,
    previewImage,
    photos: photos.split(';'),
    premium: premium.toLowerCase() === 'true',
    favorite: favorite.toLowerCase() === 'true',
    rating: Number.parseInt(rating, 10),
    type: type as OfferType,
    roomCount: Number.parseInt(roomCount, 10),
    guestCount: Number.parseInt(guestCount, 10),
    price: Number.parseInt(price, 10),
    amenities: amenities
      .split(';')
      .map((amenity) => amenity as Amenity),
    user: {
      name,
      email,
      avatar,
      type: userType as UserType
    },
    commentCount: 0,
    coordinates: {
      latitude: Number.parseFloat(coordinates.split(';')[0]),
      longitude: Number.parseFloat(coordinates.split(';')[1])
    }
  };
}
