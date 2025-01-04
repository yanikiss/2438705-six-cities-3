import {OfferType} from './offer-type.enum';
import {User} from './user.type';
import {City} from './city.type.js';
import {Location} from './location.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  location: Location;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: OfferType;
  countRooms: number;
  maxAdults: number;
  price: number;
  host: User;
}
