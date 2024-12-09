import {City} from './city.enum';
import {OfferType} from './offer-type.enum';
import {User} from './user.type';
import {Coordinates} from './coordinates.type';
import {Amenity} from './amenity.enum';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  previewImage: string;
  photos: string[];
  premium: boolean;
  favorite: boolean;
  rating: number;
  type: OfferType;
  roomCount: number;
  guestCount: number;
  price: number;
  amenities: Amenity[];
  user: User;
  commentCount: number;
  coordinates: Coordinates;
}


